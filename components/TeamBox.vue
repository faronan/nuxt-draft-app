<template>
  <c-box min-w="225px" border-width="1px" rounded="lg" overflow="hidden">
    <c-box d="flex" align-items="center">
      <c-image h="30px" :src="property.imageUrl" :alt="property.imageAlt" />
      <c-box
        color="black.500"
        font-weight="semibold"
        vertical-align="center"
        font-size="sm"
        ml="2"
      >
        {{ property.teamName }}
      </c-box>
    </c-box>
    <c-box p="4">
      <c-box color="black.500" font-weight="semibold" font-size="3xl">
        {{ property.playerName }}
      </c-box>
      <c-box color="black.500" font-weight="semibold" font-size="xs">
        {{ property.position }}
        <br />
        {{ property.belongs }}
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  name: 'TeamBox',
  data() {
    return {
      property: {
        imageUrl: '/flags/flag1.gif',
        imageAlt: 'Rear view of modern home with pool',
        teamName: 'ほげ',
        playerName: 'ほげ　ふがお',
        position: 'ほげ',
        belongs: 'ほげほげ',
      },
    }
  },
}
</script>
