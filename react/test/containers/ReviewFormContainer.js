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

  it('should render a h2 tag', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('should render an h2 tag with the title property value', () => {
    expect(wrapper.find('h2').text()).toBe('Add a New Review!');
  });
})
