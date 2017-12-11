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

  it('should render a h1 tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render an h1 tag with the title property value', () => {
    expect(wrapper.find('h1').text()).toBe('Add a New Review!');
  });

  it('calls fetch with the correct data when adding a new review', () => {
  })

  it('calls the updateReviewList callback after adding a new review', () => {
  })

  it('sets an error when the fetch fails', () => {
  })
})
