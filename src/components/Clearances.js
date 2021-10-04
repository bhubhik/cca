import { NavLink } from 'react-router-dom';

const Clearances = () => {
  return (
    <div>
      <h1 className='heading'>Clearances</h1>
      <h2 className='sub-heading'>We take care of your freight</h2>
      <p>
        As an Australian Customs (Border Protection) approved Bureau
        organisation, CCA can provide all industry affiliates and persons the
        means to report to customs via our Bureau the essential information of
        your cargo, on your behalf. The key to CCA’s success is our dedicated
        personnel, focused on attaining a clear customs status and cargo
        clearance for clients import/export consignments.
      </p>
      <NavLink to='/import-clearances'>
        <p className='cards'> Import Clearances</p>
      </NavLink>
      <NavLink to='/Export-clearances'>
        <p className='cards'>Export Clearances</p>
      </NavLink>
    </div>
  );
};

export default Clearances;
