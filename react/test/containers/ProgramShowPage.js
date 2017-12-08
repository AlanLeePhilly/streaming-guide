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

  //   spyOn(global, 'fetch').add.callFake(() => {
  //     let responseBody = JSON.stringify({
  //       program: {
  //         year: '1999',
  //         rated: 'R',
  //         run_time: '29m',
  //         genre: 'horror',
  //         actor: 'Alan',
  //         plot: 'this plot',
  //         award: 'grammy',
  //         imdb_rating: '10',
  //         total_seasons: '5'
  //       }
  //     });
  //     let response = new Response(responseBody, {
  //       status: '200',
  //       statusText: 'OK',
  //       headers: { 'Content-Type': 'application/json' }
  //     });
  //     return Promise.resolve(response);
  //   })
  // });

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
    expect(wrapper.find('h1').length).toEqual(2);
  });

  it('should render an p tag with the title property value', () => {
    expect(wrapper.find('p').text()).toBe('Program Show Container');
  });

  // it('should render an p tag with the title property value', () => {
  //   expect(wrapper.find('p').text()).toBe('Year: 1999');
  // });

});
