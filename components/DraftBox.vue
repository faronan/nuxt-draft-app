<template>
  <c-grid
    h="200px"
    w="600px"
    template-rows="repeat(2, 1fr)"
    template-columns="repeat(6, 1fr)"
    gap="6"
    padding="6"
  >
    <c-grid-item v-for="n in 12" :key="`${n}`" :bg="`green.${n * 100}`">
      <team-box></team-box>
    </c-grid-item>
  </c-grid>
</template>

<script>
export default {
  name: 'DraftBox',
}
</script>
<style></style>
