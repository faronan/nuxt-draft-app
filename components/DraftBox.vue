<template>
  <c-grid
    template-rows="repeat(2, 1fr)"
    template-columns="repeat(6, 1fr)"
    gap="6"
    padding="6"
    w="1500px"
  >
    <c-grid-item v-for="n in 12" :key="`${n}`" :bg="`green.${n * 100}`">
      <TeamBox></TeamBox>
    </c-grid-item>
  </c-grid>
</template>
