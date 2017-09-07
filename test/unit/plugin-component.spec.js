import Vue from 'vue/dist/vue.js';
import {componentGenerator} from 'src/plugin/components';

describe('Bulma component generator ', () => {
  it('should create a basic bulma component', () => {
    const vm = new Vue({
      template: '<div><box></box></div>',
      components: {
        'box': componentGenerator('box')
      }
    }).$mount()
    expect(vm.$el.querySelector('.box')).toMatchSnapshot()
  })
  it('should create a basic bulma component w/ children', () => {
    const vm = new Vue({
      template: '<div><box><span>children-test</span></box></div>',
      components: {
        'box': componentGenerator('box')
      }
    }).$mount()
    expect(vm.$el.querySelector('span').textContent).toEqual('children-test')
  })

  it('should create a basic bulma component with modifiers', () => {
    const vm = new Vue({
      template: '<div><box is-primary></box></div>',
      components: {
        'box': componentGenerator('box')
      }
    }).$mount()
    expect(vm.$el.querySelector('.box.is-primary')).toMatchSnapshot()
  })

  it('should create a basic bulma component with modifiers binded to false', () => {
    const vm = new Vue({
      template: '<div><box :is-primary="false"></box></div>',
      components: {
        'box': componentGenerator('box')
      }
    }).$mount()
    expect(vm.$el.querySelector('.box.is-primary')).toBeNull()
    expect(vm.$el.querySelector('.box')).toMatchSnapshot()
  })

  it('should create a empty div w/ no class', () => {
    const vm = new Vue({
      template: '<span><test></test></span>',
      components: {
        'test': componentGenerator()
      }
    }).$mount()
    expect(vm.$el.querySelector('div')).toMatchSnapshot()
  })
})
