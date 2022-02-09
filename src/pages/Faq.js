import { Link } from 'react-router-dom';
import classes from './Faq.module.css';

const Faq = () => {
  return (
    <div className={classes.container}>
      <h2 className='heading'>Frequently Asked Questions</h2>
      <h1>Why do I need a customs broker?</h1>
      <p>
        Even though there is no legal requirement for you to hire a Customs
        Broker it can bring a lot of advantages. An importer is ultimately
        responsible for knowing all customs and quarantine requirements and has
        to ensure that goods meet all rules and regulations. Customs Brokers are
        licenced by the Australian Customs and Border Protection to act on
        behalf of importers. Using a Customs Broker can save you from making
        costly mistakes.
      </p>
      <h1>How long will the clearance process take?</h1>
      <p>
        Usually we are able to process your clearance of goods within a day.
        However a customs or quarantine hold can occur, which must be addressed
        and the outcome is provided. For safe planning consult us as early as
        possible. “early reporting, early outcome”.
      </p>
      <h1> Do I have to pay duty and GST?</h1>
      <p>
        Import: Usually you do not have to pay duty and GST as long as the value
        of the goods does not exceed AU$1000. However there are some products
        that attract duty and GST. If the value of the goods is above AU$1000
        duty and GST may be payable. Again this is dependant of what the goods
        are.
      </p>
      <h3>
        Have another questions? <Link to='/contact-us'>Contact us.</Link>
      </h3>
    </div>
  );
};

export default Faq;
