import { NavLink } from 'react-router-dom';
import classes from './clearances.module.css';

const Import = () => {
  return (
    <div>
      <p className={classes.title}>Import Clearances</p>
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
        <h4>Documentation</h4>
        <p>
          To assist in approving the clearance of your goods, that have already
          arrived or are in transit to Australia, CCA would seek and require the
          following documents, including:
        </p>
        <p>
          <ul>
            <li>
              Your personal information (copy of your passport, drivers license)
            </li>
            <li>Authorisation to act on your behalf</li>
          </ul>
        </p>
        <div className={classes.cards}>
          <div>
            <h5>DOCUMENTS FOR AIR FREIGHT:</h5>
            <p>Airway Bill</p>
            <p>Commercial Invoice & Packing List </p>
            <p>Quarantine Packing Declaration</p>
          </div>
          <div>
            <h5>DOCUMENTS FOR SEA FREIGHT:</h5>
            <p>Bill of Lading or House Bill</p>
            <p>Commercial Invoice & Packing List </p>
            <p>Quarantine Packing Declaration</p>
          </div>
        </div>
        <h4>Customs</h4>
        <p>
          There are two different approaches to clear your goods depending on
          their value:
        </p>
        <p>
          <strong>Under AU$1000</strong>
        </p>
        <p>
          If the value of the goods is below AU$1000 the import requires a
          Self-Assessed Clearance (SAC). Duty and GST are generally not payable.
          Alcohol and tobacco do attract import duty and GST.
        </p>
        <p>
          <strong>Over AU$1000</strong>
        </p>
        <p>
          If the value of the goods exceeds AU$1000 the import requires a Formal
          Import Declaration. Duty, GST, customs process and declaration fees
          may apply.
        </p>
        <h4>Quarantine</h4>
        <p>
          Australia’s quarantine laws are among the strictest ones in the world.
          If the answer to one of these questions is yes, a quarantine hold is
          likely to occur.
        </p>
        <ul>
          <li>Do any of the articles contain timber/wood?</li>
          <li>Do any of the articles contain any biological materials?</li>
          <li>Do any articles contain flora or fauna?</li>
          <li>Are any of the articles used or second-hand?</li>
        </ul>
        <p>
          Don’t worry if you answered yes to any of the above, CCA can direct to
          correct!
        </p>
        <h4>Storage</h4>
        <p>
          In case your goods have already arrived to Australia you need to act
          quickly!
        </p>
        <p>
          Container freight stations apply costly fees if the articles haven’t
          left their warehouse in a matter of days.
        </p>
        <p>
          CCA offers a relocation of the goods to our warehouse as a
          comprehensive add-on service. You can pick them up yourself or have
          them delivered to an address of your choice.
        </p>
        <p>
          Every import is different, we will find an individual solution for
          yours.{' '}
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

export default Import;
