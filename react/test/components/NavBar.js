import NavBar from '../../src/components/NavBar';
import { mount } from 'enzyme';
import React from 'react';

describe('NavBar', () => {
  let children,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <NavBar
        children= ""
      />
    );
  });

  it('should render a h1 tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render a link', () => {
    expect(wrapper.find('Link').length).toEqual(1);
  });

  it('should render an h1 tag with the title property value', () => {
    expect(wrapper.find('h1').text()).toBe('#Big_Night_In');
  });

  it('should render an link tag with the title property value', () => {
    expect(wrapper.find('Link').text()).toBe(' HOME ');
  });
});
