import BackButton from '../../src/components/BackButton';
import { mount } from 'enzyme';
import React from 'react';

describe('BackButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BackButton/>
    );
  });

  it('should render a button tag', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should render an button tag with the title property value', () => {
    expect(wrapper.find('button').text()).toBe('Back');
  });
});
