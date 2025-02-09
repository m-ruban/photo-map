<script lang="ts">
    let { src, alt, radius: _radius = '', size = 'medium' } = $props();
    const radius = _radius ? `avatar_radius-${_radius}` : '';
</script>

<style lang="less">
    @import "src/core-components/Avatar/avatar.less";
</style>

<div class={`avatar ${radius} avatar_size-${size}`}>
    <img src={src} alt={alt}>
</div>