<script setup lang="ts">
import { iconType, useTeams } from '~/composables/useTeams'

const { addTeam } = useTeams()

const inputTeamName = ref<string>('')
const initialIcon: iconType = { src: '', alt: '' }
const inputIcon = ref<iconType>(initialIcon)

const isOpen = ref<boolean>(false)
const modalOpen = () => {
  isOpen.value = true
}
const modalClose = () => {
  isOpen.value = false
}

const findIconById = (id: number) => {
  const image = iconsDataList.find((image) => image.id == id)
  return image ?? { id: -1, ...initialIcon }
}
const onIconClick = (id: number) => {
  inputIcon.value = findIconById(id)
  modalClose()
}

const onDecisionButtonClick = () => {
  addTeam(inputTeamName.value, inputIcon.value)
}

const altList = [
  '読売',
  '中日',
  '阪神',
  '広島',
  'DeNA',
  'ヤクルト',
  'オリックス',
  '西武',
  'ロッテ',
  '日本ハム',
  'ソフトバンク',
  '楽天',
]

const iconsDataList = [...Array(12)].map((_, i) => {
  return { id: i + 1, src: `/flags/flag${i + 1}.gif`, alt: altList[i] }
})
</script>

<template>
  <c-box p="4" w="300px">
    <c-form-control is-required mb="2">
      <c-form-label>チーム名</c-form-label>
      <c-input
        v-model="inputTeamName"
        type="text"
        size="md"
        placeholder="チーム名"
      />
    </c-form-control>
    <c-form-control is-required mb="2">
      <c-form-label>アイコン</c-form-label>
      <c-box d="flex">
        <c-button variant-color="gray" @click="modalOpen"
          >一覧から選択</c-button
        >
        <c-image
          v-if="inputIcon.src"
          h="40px"
          w="60px"
          :src="inputIcon.src"
          :alt="inputIcon.alt"
        />
        <c-modal :is-open="isOpen">
          <c-modal-content ref="content">
            <c-modal-header>アイコンを選択</c-modal-header>
            <c-modal-close-button @click="modalClose" />
            <c-modal-body>
              <c-grid
                template-rows="repeat(2, 1fr)"
                template-columns="repeat(6, 1fr)"
                gap="2"
              >
                <c-grid-item v-for="n in 12" :key="`${n}`">
                  <div @click="onIconClick(n)">
                    <c-image
                      h="40px"
                      w="60px"
                      :src="findIconById(n).src"
                      :alt="findIconById(n).alt"
                    />
                  </div>
                </c-grid-item>
              </c-grid>
            </c-modal-body>
          </c-modal-content>
          <c-modal-overlay />
        </c-modal>
      </c-box>
    </c-form-control>

    <c-button variant-color="blue" size="sm" @click="onDecisionButtonClick">
      決定
    </c-button>
  </c-box>
</template>
