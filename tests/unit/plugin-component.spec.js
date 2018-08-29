import Vue from 'vue/dist/vue.js'
import { shallowMount } from '@vue/test-utils'
import { componentGenerator } from 'src/plugin/components'

describe('Bulma component generator ', () => {
  it('should create a basic bulma component', () => {
    const wrapper = shallowMount(componentGenerator('panel'), {
      context: {}
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should trigger events', () => {
    const onClick = jest.fn()
    const wrapper = shallowMount(componentGenerator('box'), {
      context: { props: { isPrimary: true }, on: { click: onClick } }
    })
    expect(onClick.mock.calls.length).toBe(0)
    wrapper.trigger('click')
    expect(onClick.mock.calls.length).toBe(1)
  })
  it('should create a basic bulma component w/ children', () => {
    const vm = new Vue({
      template: '<div><box><span>children-test</span></box></div>',
      components: {
        box: componentGenerator('box')
      }
    }).$mount()
    expect(vm.$el.querySelector('span').textContent).toEqual('children-test')
  })

  it('should create a basic bulma component with modifiers', () => {
    const wrapper = shallowMount(componentGenerator('box', 'span'), {
      context: {
        props: { isPrimary: true }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    const wrapper2 = shallowMount(componentGenerator('box'), {
      context: {
        props: { 'is-2': true }
      }
    })
    expect(wrapper2.html()).toMatchSnapshot()
  })

  it('should create a basic bulma component with modifiers binded to false', () => {
    const wrapper = shallowMount(componentGenerator('box'), {
      context: {
        props: { isPrimary: false }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should create a empty div w/ no class', () => {
    const wrapper = shallowMount(componentGenerator(), {
      context: {}
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should create input', () => {
    const wrapper = shallowMount(componentGenerator('input'), {
      context: {}
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should delete added props', () => {
    const wrapper = shallowMount(componentGenerator('container'), {
      context: {
        props: {
          isFluid: false,
          'is-widescreen': true
        }
      }
    })

    expect(wrapper.props('is-fluid')).toBe(false)
    expect(wrapper.props('is-widescreen')).toBe(false)
  })
})
