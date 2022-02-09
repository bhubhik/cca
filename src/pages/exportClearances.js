import classes from './clearances.module.css';
import { NavLink } from 'react-router-dom';

const Export = () => {
  return (
    <div>
      <p className={classes.title}>Export Clearances</p>
      <svg className={classes.line}>
        <line
          x1='0'
          y1='0'
          x2='360'
          y2='0'
          stroke='#235784'
          strokeWidth='3px'
        />
      </svg>
      <div className={classes.content}>
        <p>
          In order to export articles from Australia you will require an
          Australian Harmonised Export Commodity Classification ( AHECC ) which
          is an eight digit code to classify goods
        </p>
        <p>
          CCA is customs approved to declare your goods attaining an Export
          cleared status. As there are thousands of AHECC classifications it can
          sometimes be confusing.
        </p>
        <p>
          We can assist you to correctly defining your goods, AHECC and
          clearance.
        </p>
        <h4>Documentation</h4>
        <p>Following documents are crucial for us to clear your goods:</p>
        <p>
          <ul>
            <li>Export invoice</li>
            <li>Booking confirmation</li>
            <li>Any permits and licences may be required</li>
          </ul>
        </p>
        <h4>Customs</h4>
        <p>
          Exportation of goods are controlled by government legislations and
          policies.
        </p>
        <p>
          All goods intended to be exported from Australia with a value of AUD
          2000 or more must be declared to Customs on an export declaration
          (EDN).
        </p>
        <p>
          CCA through its authority with the Interactive Customs System can
          facilitate this process on your behalf.{' '}
        </p>
        <p>
          Goods which are conditionally prohibited from export may not be
          exported unless all necessary export permits are obtained. Any goods
          that require a permit for export must be reported on an export
          declaration regardless of value.
        </p>
        <p>
          CCA can assist with compliance in obtaining these lawful permits
          allowing the successful exportation of your goods.
        </p>
        <h4>Quarantine</h4>
        <p>
          Following goods are regulated by the Department of Agriculture and may
          generally require additional documentary to attain Export clearance.
        </p>
        <ul>
          <li>Food</li>
          <li>Live animals</li>
          <li>Animal products</li>
          <li>Fish</li>
          <li>Aquatic products</li>
          <li>Plants and grains</li>
        </ul>
        <p>
          At CCA we can guide you through the process.
          <NavLink to='/contact-us'>
            <strong>Contact us.</strong>
          </NavLink>
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Export;
