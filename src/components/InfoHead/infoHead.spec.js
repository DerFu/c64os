import Vue from 'vue';
import infoHead from './index.vue';

const Constructor = Vue.extend(infoHead);
const vm = new Constructor().$mount();

describe('infoHead', () => {
  it('should display head', () => {
    expect(vm.$el.querySelector('.header pre').textContent).toEqual('**** COMMODORE 64 BASIC V2 ****');
  });
});