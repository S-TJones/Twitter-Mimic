import { shallowMount } from '@vue/test-utils';
import AsideMenu from './aside-menu.vue';

describe('AsideMenu.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(AsideMenu);

    expect(wrapper.exists()).toEqual(true);
  });
});
