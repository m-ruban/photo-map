<script lang="ts">
    import type { Snippet } from 'svelte';
    import { tick } from 'svelte';
    import Portal from "src/core-components/Portal/Portal.svelte";

    type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

    interface DropdownProps {
        activator: HTMLElement | null;
        position?: Position;
        children: Snippet;
    }

    interface DropdownMetrics {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    }

    let { activator, position = 'bottom-left', children }: DropdownProps = $props();
    let show: boolean = $state(false);
    let dropdownStyles: DropdownMetrics = $state({});
    let dropdownRef: HTMLDivElement | null = $state(null);
    let dropdownBodyRef: HTMLElement | null = $state(null);
  
    const toggleShown = async () => {
        show = !show;
        await tick();
        if (!activator || !dropdownBodyRef) return;
        if (show && activator) {
            const buttonRect = activator.getBoundingClientRect();
            const dropdownBodyRect = dropdownBodyRef.getBoundingClientRect();
            if (position.includes('bottom')) {
                dropdownStyles.top = `${buttonRect.bottom + window.scrollY}px`;
            }
            if (position.includes('top')) {
                dropdownStyles.top = `${buttonRect.top - dropdownBodyRect.height + window.scrollY}px`;
            }
            if (position.includes('left')) {
                dropdownStyles.left = `${buttonRect.left + window.scrollX}px`;
            }
            if (position.includes('right')) {
                dropdownStyles.left = `${buttonRect.right - dropdownBodyRect.width + window.scrollX}px`;
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
            class={`dropdown-menu dropdown-menu_position-${position}`}
            style={`
                ${dropdownStyles.top ? `top:${dropdownStyles.top};` : ''}
                ${dropdownStyles.left ? `left:${dropdownStyles.left};` : ''}
                ${dropdownStyles.right ? `right:${dropdownStyles.right};` : ''}
                ${dropdownStyles.bottom ? `bottom:${dropdownStyles.bottom};` : ''}
            `}
        >
            <div bind:this={dropdownBodyRef}>{@render children?.()}</div>
        </div>
    </Portal>
{/if}
