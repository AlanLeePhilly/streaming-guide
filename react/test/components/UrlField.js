import UrlField from '../../src/components/UrlField';

describe('UrlField', () =>{
  let wrapper;
  let func = new Function;

  beforeEach(()=>{
    wrapper = mount(
      <UrlField
      name='testname'
      content='testvalue'
      handleUrlChange={func}/>
    );
  });

  it('should render a label tag', () => {
    expect(wrapper.find('label').length).toBe(1);
  });

  it('should render input with the appropriate attributes', () => {
     expect(wrapper.find('textarea').at(0)).toBePresent();
     expect(wrapper.find('textarea').at(0).props()).toEqual({
       name: 'testname',
       type: 'text',
       value: 'testvalue',
       onChange: jasmine.any(Function)
     });
   });
 });
