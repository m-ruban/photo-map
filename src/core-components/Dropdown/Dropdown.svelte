<script lang="ts">
    import type { Snippet } from 'svelte';
    import Portal from "src/core-components/Portal/Portal.svelte";

    interface DropdownProps {
        activator: HTMLElement | null;
        position?: string;
        children: Snippet;
    }

    interface DropdownMetrics {
        top: string;
        left?: string;
        right?: string;
    }

    let { activator, position = 'left', children }: DropdownProps = $props();
    let show: boolean = $state(false);
    let dropdownStyles: DropdownMetrics = $state({ top: "0px" });
    let dropdownRef: HTMLDivElement | null = $state(null);
  
    const toggleShown = () => {
        show = !show;
        if (show && activator) {
            const buttonRect = activator.getBoundingClientRect();
            dropdownStyles = {
                top: `${buttonRect.bottom + window.scrollY}px`,
            };
            if (position === 'left') {
                dropdownStyles.left = `${buttonRect.left + window.scrollX}px`;
            }
            if (position === 'right') {
                dropdownStyles.right = `${window.innerWidth - buttonRect.width - buttonRect.left}px`;
            }
        }
    }

    const clickOutside = (event: MouseEvent) => {
        if (!activator || !show) {
            return;
        }
        const target = event.target as Node;
        if (dropdownRef?.contains(target)) {
            return;
        }
        if (!activator.contains(target)) {
            show = false;
        }
    }

    $effect(() => {
        if (!activator) {
            return;
        }
        activator.addEventListener('click', toggleShown);
        document.addEventListener("click", clickOutside);
        return () => {
            activator.removeEventListener('click', toggleShown);
            document.removeEventListener("click", clickOutside);
        };
    });
</script>
  
<style lang="less">
    @import "src/core-components/Dropdown/dropdown.less";
</style>
  
{#if show}
    <Portal>
        <div
            bind:this={dropdownRef}
            class="dropdown-menu"
            style={`
                ${dropdownStyles.top ? `top:${dropdownStyles.top};` : ''}
                ${dropdownStyles.left ? `left:${dropdownStyles.left};` : ''}
                ${dropdownStyles.right ? `right:${dropdownStyles.right};` : ''}
            `}
        >
            {@render children?.()}
        </div>
    </Portal>
{/if}

  