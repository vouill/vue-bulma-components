import Vue from 'vue/dist/vue.js'
import { shallow } from 'vue-test-utils'
import { componentGenerator } from 'src/plugin/components'

describe('Bulma component generator ', () => {
  it('should create a basic bulma component', () => {
    const wrapper = shallow(componentGenerator('panel'), {
      context: {}
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should trigger events', () => {
    const onClick = jest.fn()
    const wrapper = shallow(componentGenerator('box'), {
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
    const wrapper = shallow(componentGenerator('box', 'span'), {
      context: {
        props: { isPrimary: true }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    const wrapper2 = shallow(componentGenerator('box'), {
      context: {
        props: { 'is-2': true }
      }
    })
    expect(wrapper2.html()).toMatchSnapshot()
  })

  it('should create a basic bulma component with modifiers binded to false', () => {
    const wrapper = shallow(componentGenerator('box'), {
      context: {
        props: { isPrimary: false }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should create a empty div w/ no class', () => {
    const wrapper = shallow(componentGenerator(), {
      context: {}
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should create input', () => {
    const wrapper = shallow(componentGenerator('input'), {
      context: {}
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should delete added props', () => {
    const wrapper = shallow(componentGenerator('container'), {
      context: {
        props: {
          isFluid: false,
          'is-widescreen': true
        }
      }
    })

    expect(wrapper.hasProp('is-fluid')).toBe(false)
    expect(wrapper.hasProp('is-widescreen')).toBe(false)
  })
})
