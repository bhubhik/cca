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
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.256825844169!2d151.14058335101066!3d-33.960237780536055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b104e3308cf9%3A0x7f518515ba948d6!2sCustoms%20%26%20Cargo%20Administrators%20(CCA)!5e0!3m2!1sen!2sau!4v1643433196020!5m2!1sen!2sau'
        width='560'
        height='400'
        allowfullscreen=''
        loading='lazy'
      />
    </div>
  );
};

export default ContactUs;
