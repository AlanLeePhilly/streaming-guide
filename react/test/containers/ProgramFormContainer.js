import ProgramFormContainer from '../../src/containers/ProgramFormContainer';

describe('ProgramFormContainer', () =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(
      <ProgramFormContainer />
    );
  });


  it('should render a ProgramForm with the appropriate attributes', () => {
   expect(wrapper.find('ProgramForm').at(0)).toBePresent();
   });

 });
