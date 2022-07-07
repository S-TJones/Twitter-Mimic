import { shallowMount } from '@vue/test-utils';
import Trending from './trending.vue';

describe('Trending.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Trending);

    expect(wrapper.exists()).toEqual(true);
  });
});
