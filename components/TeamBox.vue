<script setup lang="ts">
import { useForm } from '~/composables/useForm'

const { playerName, position, belongs } = useForm()

const teamName = '巨人'
const imageUrl = '/flags/flag1.gif'
const imageAlt = 'Rear view of modern home with pool'
</script>

<template>
  <c-box w="225px" h="140px" border-width="1px" rounded="lg" overflow="hidden">
    <c-box d="flex" align-items="center">
      <c-image h="30px" :src="imageUrl" :alt="imageAlt" />
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
