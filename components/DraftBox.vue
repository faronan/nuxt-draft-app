<script setup lang="ts">
import { ref as firebaseRef, onValue } from 'firebase/database'
import { database } from '~/plugins/firebase'
import { teamInterface } from '~/composables/interfaces/teamInterfaces'

const { teamsState, updateTeamState } = useTeams()
//TODO: roomIdの割り当て
const roomId = 0
const teamsRef = firebaseRef(database, `rooms/${roomId}/teams/`)
onValue(teamsRef, (snapshot) => {
  const isTeam = (t: unknown): t is teamInterface => {
    return t.teamId != undefined && t.teamName != undefined
  }

  const data = snapshot.val()
  if (data) {
    const teams = data.filter((e: unknown) => isTeam(e))
    updateTeamState(teams)
  }
})
</script>

<template>
  <c-grid
    template-rows="repeat(2, 1fr)"
    template-columns="repeat(6, 1fr)"
    gap="6"
    padding="6"
    w="1500px"
  >
    <c-grid-item v-for="teamState in teamsState" :key="`${teamState.teamId}`">
      <TeamBox :team="teamState"></TeamBox>
    </c-grid-item>
  </c-grid>
</template>
