import ReviewTile from '../../src/components/ReviewTile';
import { mount } from 'enzyme';
import React from 'react';


describe('ReviewTile', () => {
  let id,
      data,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        id= "1"
        data= "I am a Headline"
      />
    );
  });

  it('should render a div tag', () => {
     expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a p tag', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });

  it('should render an p tag with the rating/vote score', () => {
    expect(wrapper.find('p').text()).toBe(' Rating: /10 Vote Score: ');
  });

  it('should render an strong tag', () => {
    expect(wrapper.find('strong').text()).toBe('');
  });
});
