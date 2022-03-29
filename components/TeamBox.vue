<script setup lang="ts">
import { useTeams } from '~/composables/useTeams'

const { teamHash } = useTeams()

interface Props {
  teamId: number
}

const props = defineProps<Props>()

const team = teamHash[teamId]
const { teamName, icon, playerName, position, belongs } = { ...team }
</script>

<template>
  <c-box w="225px" h="140px" border-width="1px" rounded="lg" overflow="hidden">
    <c-box d="flex" align-items="center">
      <c-image
        v-if="icon.src"
        h="30px"
        w="45px"
        :src="icon.src"
        :alt="icon.alt"
      />
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
    <c-box p="4">
      <c-box color="black.500" font-weight="semibold" font-size="3xl">
        {{ playerName }}
      </c-box>
      <c-box color="black.500" font-weight="semibold" font-size="xs">
        {{ position }}
        <br />
        {{ belongs }}
      </c-box>
    </c-box>
  </c-box>
</template>
