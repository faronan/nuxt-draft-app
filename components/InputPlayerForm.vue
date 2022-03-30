<script setup lang="ts">
import { useTeams } from '~/composables/useTeams'

const { updateTeam } = useTeams()

const inputPlayerName = ref<string>('')
const inputPosition = ref<string>('')
const inputBelongs = ref<string>('')

// TODO: ルームの構成が出来次第、自分のteamIdを指定するように修正する
const teamId = 1
const onDecisionButtonClick = () => {
  updateTeam(
    teamId,
    inputPlayerName.value,
    inputPosition.value,
    inputBelongs.value
  )
}
</script>

<template>
  <c-box p="4" w="300px">
    <c-form-control is-required mb="2">
      <c-form-label>指名選手</c-form-label>
      <c-input
        v-model="inputPlayerName"
        type="text"
        size="md"
        placeholder="指名選手"
      />
    </c-form-control>
    <c-form-control mb="2">
      <c-form-label>ポジション</c-form-label>
      <c-input
        v-model="inputPosition"
        type="text"
        size="md"
        placeholder="ポジション"
      />
    </c-form-control>
    <c-form-control mb="2">
      <c-form-label>所属</c-form-label>
      <c-input
        v-model="inputBelongs"
        type="text"
        size="md"
        placeholder="出身"
      />
    </c-form-control>
    <c-button variant-color="blue" size="sm" @click="onDecisionButtonClick">
      決定
    </c-button>
  </c-box>
</template>
