<script lang="ts">
    let { value = $bindable(), ...otherProps } = $props()
    function handleInput(e: Event) {
        const target = e.target as HTMLSelectElement;
        value = target.value;
    }
</script>

<style lang="less">
    @import "src/core-components/Input/input.less";
</style>

<input
    class="input"
    value={value}
    oninput={handleInput}
    {...otherProps}
/>