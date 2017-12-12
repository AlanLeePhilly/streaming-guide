import ReviewSelectField from '../../src/components/ReviewSelectField'
import { mount } from 'enzyme';
import React from 'react';


describe('ReviewSelectField', () => {
  let id,
      title,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewSelectField
      />
    );
  });

  it('should render a label tag', () => {
    expect(wrapper.find('label').length).toEqual(1);
  });

  it('should render a select', () => {
    expect(wrapper.find('select').length).toEqual(1);
  });

  it('should render a option', () => {
    expect(wrapper.find('option').length).toEqual(11);
  });
});
