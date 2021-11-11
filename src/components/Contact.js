import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faAt,
  faMapMarkerAlt,
  faFax,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div>
      <div className='container'>
        <div className='contact-img' />
        <div className='contact-details'>
          <h1>Contact Us</h1>
          <div>
            <h3>
              <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
              <a href='tel:0283990777'> Phone: 02 8399 0777 </a>
            </h3>
          </div>
          <div>
            <h3>
              <FontAwesomeIcon className='icon' icon={faAt} />
              <a href='mailto:admin@customscargo.com.au'>
                admin@customscargo.com.au{' '}
              </a>
            </h3>
          </div>
          <div>
            <h3>
              <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
              Unit 20/ 54 Beach Street, Kogarah NSW 2217
            </h3>
          </div>
          <div>
            <h3>
              <FontAwesomeIcon className='icon' icon={faFax} />
              Fax: 02 8399 0677
            </h3>
          </div>

          <h3>
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
            PO Box 165, ROSEBERY NSW 2018 AUSTRALIA
          </h3>
        </div>
      </div>
      <iframe
        title='map'
        className='contact-map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.3169335208748!2d151.14201489228358!3d-33.95995735906439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b75664eea3bd%3A0x534bb1596c619dc2!2s54%20Beach%20St%2C%20Kogarah%20NSW%202217!5e0!3m2!1sen!2sau!4v1636667315220!5m2!1sen!2sau'
        width='560'
        height='400'
        allowfullscreen=''
        loading='lazy'
      />
    </div>
  );
};

export default ContactUs;
