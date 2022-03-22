import { mount } from '@vue/test-utils'
import DraftBox from '@/components/DraftBox.vue'

describe('DraftBox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DraftBox)
    expect(wrapper.vm).toBeTruthy()
  })
})
