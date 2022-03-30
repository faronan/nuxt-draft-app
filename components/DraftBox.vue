<script setup lang="ts">
import { teamInterface, useTeams } from '~/composables/useTeams'
import { database } from '~/plugins/firebase'
import { ref as firebaseRef, onValue } from 'firebase/database'

//TODO: roomIdの割り当て
const roomId = 0
const starCountRef = firebaseRef(database, `rooms/${roomId}/teams/`)
onValue(starCountRef, (snapshot) => {
  const isTeam = (t: unknown): t is teamInterface => {
    return t.teamId != undefined && t.teamName != undefined
  }

  const data = snapshot.val()
  const teams = data.filter((e: unknown) => isTeam(e))
  updateTeamState(teams)
})

const { teamState, updateTeamState } = useTeams()
</script>

<template>
  <c-grid
    template-rows="repeat(2, 1fr)"
    template-columns="repeat(6, 1fr)"
    gap="6"
    padding="6"
    w="1500px"
  >
    <c-grid-item v-for="n in teamState.length" :key="`${n}`">
      <TeamBox :team-id="`${n}`"></TeamBox>
    </c-grid-item>
  </c-grid>
</template>
