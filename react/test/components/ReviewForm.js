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
    expect(wrapper.find('label').at(1).text()).toBe('Body');
    expect(wrapper.find('label').at(2).text()).toBe('Rating');
  });

  it('should render inputs with the appropriate attributes', () => {
   expect(wrapper.find('input').at(0)).toBePresent();
   expect(wrapper.find('input').at(0).props()).toEqual({
     name: 'Headline',
     type: 'text',
     value: '',
     onChange: jasmine.any(Function)
   });

   expect(wrapper.find('input').at(1)).toBePresent();
   expect(wrapper.find('input').at(1).props()).toEqual({
     name: 'Body',
     type: 'text',
     value: '',
     onChange: jasmine.any(Function)
   });

   expect(wrapper.find('input').at(2)).toBePresent();
   expect(wrapper.find('input').at(2).props()).toEqual({
     name: 'Rating',
     type: 'text',
     value: '',
     onChange: jasmine.any(Function)
   });
 });
