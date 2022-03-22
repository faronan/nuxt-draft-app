<script setup>
const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template>
  <c-box p="4" w="300px">
    <c-form-control is-required mb="2">
      <c-form-label>指名選手</c-form-label>
      <c-input type="text" size="md" placeholder="指名選手" />
    </c-form-control>
    <c-form-control mb="2">
      <c-form-label>ポジション</c-form-label>
      <c-input type="text" size="md" placeholder="ポジション" />
    </c-form-control>
    <c-form-control mb="2">
      <c-form-label>出身</c-form-label>
      <c-input type="text" size="md" placeholder="出身" />
    </c-form-control>
    <c-button variant-color="blue" size="sm"> 送信 </c-button>
  </c-box>
</template>
