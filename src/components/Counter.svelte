<script lang="ts">
  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<style lang="less">
  @import "src/components/counter.less";
</style>

<button class="test-btn" onclick={increment}>
  count is {count}
</button>