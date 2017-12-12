import ProgramForm from '../../src/components/ProgramForm';

describe('ProgramForm', () =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(
      <ProgramForm />
    );
  });

  it('should render a label tags with the appropriate attributes', () => {
    expect(wrapper.find('label').at(0).text()).toBe('Program Url');
  });

  it('should render inputs with the appropriate attributes', () => {
    expect(wrapper.find('input').at(0)).toBePresent();
    expect(wrapper.find('input').is('.button'));
  })
 });
