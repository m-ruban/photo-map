<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    export let target: HTMLElement = document.body;
    
    let container: HTMLDivElement;
    let contentElement: HTMLDivElement;
  
    onMount(() => {
        container = document.createElement("div");
        target.appendChild(container);
        container.appendChild(contentElement);
    });
  
    onDestroy(() => {
        if (container && container.parentNode) {
            container.parentNode.removeChild(container);
        }
    });
</script>
  
<div bind:this={contentElement}>
    <slot />
</div>
  