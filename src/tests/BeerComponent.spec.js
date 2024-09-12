import { mount } from '@vue/test-utils'
import BeerComponent from '../views/BeerComponent.vue'

describe('BeerComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(BeerComponent)
    // Check if the component exists
    expect(wrapper.exists()).toBe(true)
  })
})