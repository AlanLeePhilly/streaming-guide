import ReviewTile from '../../src/components/ReviewTile';
import { mount } from 'enzyme';
import React from 'react';


describe('ReviewTile', () => {

  let data,
      wrapper;

  beforeEach(() => {
    data = {
      headline: 'this headline',
      body: 'this body',
      rating: 8,
      vote_count: 0
    }
    wrapper = mount(
      <ReviewTile
        id= "1"
        data={data}
        username='this username'
        shortdate='this shortdate'
      />
    );
  });

  it('should render a div tag', () => {
     expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a p tag', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });



  it('should render an h1 tag with the title property value', () => {
    expect(wrapper.text()).toContain('this headline');
    expect(wrapper.text()).toContain('this body');
    expect(wrapper.text()).toContain('Rating: 8/10');
    expect(wrapper.text()).toContain('this username');

  });
});
