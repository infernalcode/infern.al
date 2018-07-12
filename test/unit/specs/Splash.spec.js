import Vue from 'vue'
import Splash from '@/components/Splash'

describe('Splash.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Splash)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.infernal h1').textContent)
      .to.equal('Infernal Engineering')
  })
})
