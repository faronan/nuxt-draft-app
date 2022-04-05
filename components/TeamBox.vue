<script setup lang="ts">
import {
  iconInterface,
  playerInterface,
  teamInterface,
} from '~/composables/useTeams'

interface Props {
  team: teamInterface
}
const props = defineProps<Props>()
const teamName = ref<string>(props.team.teamName)
const icon = ref<iconInterface>(props.team.icon)

const player: playerInterface = computed(() => {
  const players = props.team.players
  if (players) {
    return players[players.length - 1]
  }
  return {
    playerName: '',
    position: '',
    belongs: '',
  }
})
</script>

<template>
  <c-box w="225px" h="140px" border-width="1px" rounded="lg" overflow="hidden">
    <c-box v-if="icon.src" d="flex" align-items="center">
      <c-image h="30px" w="45px" :src="icon.src" :alt="icon.alt" />
      <c-box
        color="black.500"
        font-weight="semibold"
        vertical-align="center"
        font-size="sm"
        ml="2"
      >
        {{ teamName }}
      </c-box>
    </c-box>
    <c-box v-if="player.playerName" p="4">
      <c-box color="black.500" font-weight="semibold" font-size="3xl">
        {{ player.playerName }}
      </c-box>
      <c-box color="black.500" font-weight="semibold" font-size="xs">
        {{ player.position }}
        <br />
        {{ player.belongs }}
      </c-box>
    </c-box>
  </c-box>
</template>
