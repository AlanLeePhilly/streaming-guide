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

  it('should render a h4 tag', () => {
    expect(wrapper.find('h4').length).toEqual(2);
  });

  it('should render a img tag', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should render a p tag', () => {
    expect(wrapper.find('p').length).toEqual(2);
  });
});
