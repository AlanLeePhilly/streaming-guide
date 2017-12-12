import ReviewForm from '../../src/components/ReviewForm';

describe('ReviewForm', () =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(
      <ReviewForm />
    );
  });

  it('should render a label tags with the appropriate attributes', () => {
    expect(wrapper.find('label').at(0).text()).toBe('Headline');
    expect(wrapper.find('label').at(1).text()).toBe('Review');
    expect(wrapper.find('label').at(2).text()).toContain('Rank this show!');
  });

  it('should render inputs with the appropriate attributes', () => {
     expect(wrapper.find('input').at(0)).toBePresent();
     expect(wrapper.find('input').at(0).props()).toEqual({
       id: 'headline',
       type: 'text',
       value: '',
       onChange: jasmine.any(Function)
     });

     expect(wrapper.find('input').at(1)).toBePresent();
     expect(wrapper.find('input').at(1).props()).toEqual({
       id: 'body',
       type: 'text',
       value: '',
       onChange: jasmine.any(Function)
     });

   it('should render select', () => {
    expect(wrapper.find('select').at(0)).toBePresent();
    expect(wrapper.find('select').at(1)).toBePresent();
    expect(wrapper.find('select').at(2)).toBePresent();
    expect(wrapper.find('select').at(3)).toBePresent();
    expect(wrapper.find('select').at(4)).toBePresent();
    expect(wrapper.find('select').at(6)).toBePresent();
    expect(wrapper.find('select').at(7)).toBePresent();
    expect(wrapper.find('select').at(8)).toBePresent();
    expect(wrapper.find('select').at(9)).toBePresent();
    expect(wrapper.find('select').at(10)).toBePresent();
  });
  });
});
