import Button from '@/components/ui/Button';
import Loading from '@/components/ui/Loading';
import { shallowMount } from '@vue/test-utils';

describe('Button.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Button, {
      stubs: {
        Loading,
      },
      slots: {
        default: 'Hello',
      },
    });
  });

  it('should render correct contents', () => {
    expect(wrapper.element.textContent.trim()).to.equal('Hello');
  });

  it('should render with default props', () => {
    expect(wrapper.element).to.have.class('button__normal');
    expect(wrapper.element).to.have.class('button__green');
  });

  it('should render small button', () => {
    wrapper.setProps({
      size: 'small',
    });

    expect(wrapper.element).to.have.class('button__small');
  });

  it('should render red button', () => {
    wrapper.setProps({
      color: 'red',
    });

    expect(wrapper.element).to.have.class('button__red');
  });

  it('should emit click event', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().click.length).to.equals(1);
  });

  it('should work loading state', () => {
    wrapper.setProps({
      loading: true,
    });
    debugger;
    expect(wrapper.element).to.have.class('button__loading').and.contain('div.loading-spinner');
  });
});
