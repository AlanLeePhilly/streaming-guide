import ReviewTextInputField from '../../src/components/ReviewTextInputField'
import { mount } from 'enzyme';
import React from 'react';


describe('ReviewTextInputField', () => {
  let id,
      title,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTextInputField
      />
    );
  });

  it('should render a label tag', () => {
    expect(wrapper.find('label').length).toEqual(1);
  });

  it('should render a input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });
});
