import { shallowMount } from '@vue/test-utils';
import Button from '@/components/button/Button.vue';

describe('Button', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(Button);
  });
  it('is a Vue instance', () => {
    cmp = shallowMount(Button);
    expect(cmp.isVueInstance()).toBeTruthy();
  });
  it('has propper computed class', () => {
    cmp = shallowMount(Button, {
      propsData: {
        type: 'primary',
      },
    });
    expect(cmp.classes('btn-primary')).toBeTruthy();
  });
  it('has propper computed outline class', () => {
    cmp = shallowMount(Button, {
      propsData: {
        type: 'primary',
        outline: true,
      },
    });
    expect(cmp.classes('btn-outline-primary')).toBeTruthy();
  });
  it('has correcttly insert slot', () => {
    cmp = shallowMount(Button, {
      slots: {
        default: '<i class="loading-icon"></i> Hey Slot!',
      },
    });
    expect(cmp.findAll('.loading-icon').length).toBe(1);
  });
  it('has disabled style', () => {
    cmp = shallowMount(Button, {
      propsData: {
        disabled: true,
      },
    });
    expect(cmp.classes('disabled')).toBeTruthy();
  });
  it('if fires click event when clicked', () => {
    cmp = shallowMount(Button, {
      propsData: {
        type: 'primary',
        outline: true,
      },
    });
    cmp.trigger('click');
    expect(cmp.emitted()['on-clicked']).toBeTruthy();
  });
});
