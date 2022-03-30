<script setup lang="ts">
import { useTeams } from '~/composables/useTeams'

const { teamIds } = useTeams()
</script>

<template>
  <c-grid
    template-rows="repeat(2, 1fr)"
    template-columns="repeat(6, 1fr)"
    gap="6"
    padding="6"
    w="1500px"
  >
    <c-grid-item v-for="n in teamIds.length" :key="`${n}`">
      <TeamBox :teamId="`${n}`"></TeamBox>
    </c-grid-item>
  </c-grid>
</template>
