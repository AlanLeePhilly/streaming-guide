import ProgramShowContainer from '../../src/containers/ProgramShowContainer';
import { mount } from 'enzyme';
import React from 'react';

describe('ProgramShowContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ProgramShowContainer
        params={{ id: 1 }}
      />
    );
  });

  it('should render a h1 tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render an h1 tag with the title property value', () => {
    expect(wrapper.find('h1').text()).toBe('Program Show Container');
  });

  it('should render a img tag', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should render a p tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
});
