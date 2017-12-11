import ProgramsContainer from '../../src/containers/ProgramsContainer';
import { mount } from 'enzyme';
import React from 'react';

describe('ProgramsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ProgramsContainer />
    );
  });

  it('should render a h1 tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render an h1 tag with the title property value', () => {
    expect(wrapper.find('h1').text()).toBe('Programs Index Page');
  });
});
