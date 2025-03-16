<script lang="ts">
    let { children, xs: xsSize = '', s: sSize = '', m: mSize = '', l: lSize = '', layout = 'default' } = $props();
    const xs = xsSize ? `column-xs-size_${xsSize}` : 'column-xs-hide';
    const s = sSize ? `column-s-size_${sSize}` : 'column-s-hide';
    const m = mSize ? `column-m-size_${mSize}` : 'column-m-hide';
    const l = lSize ? `column-l-size_${lSize}` : '';
</script>

<style lang="less">
    @import "src/components/Column/column.less";
</style>

<div class={`column column_layout-${layout} ${xs} ${s} ${m} ${l}`}>
    {@render children?.()}
</div>