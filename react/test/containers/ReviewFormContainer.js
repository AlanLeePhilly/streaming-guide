import ReviewFormContainer from '../../src/containers/ReviewFormContainer';
import { mount } from 'enzyme';
import React from 'react';

describe('AddReviewForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewFormContainer
      />
    );
  });

  it('should render a div tag', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should render an h4 tag with the title property value', () => {
    expect(wrapper.find('h4').text()).toBe('Add a New Review!');
  });
})
