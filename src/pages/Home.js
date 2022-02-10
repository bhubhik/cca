import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-content'>
      <div className='container'>
        <div className='sub-header'>
          <h1>Customs & Cargo Administrators</h1>
          <h3>
            Your gateway to international trade, transport and customs processes
            in Australia
          </h3>
        </div>
        <div className='home-image' />
      </div>
      <div className='info'>
        <p>
          Customs & Cargo Administrators (CCA) is a privately owned, Sydney
          based company, servicing clients in the wider international trade and
          transport industry with their IMPORT / EXPORT requirements. We have a
          market presence of over two decades and continue to build close
          relations with government services, as well as the transport industry,
          including: shipping lines, airlines and airline handlers, freight
          forwarders, brokerage services, customs/ quarantine depots and courier
          companies. We assure to serve you in a fast and cost efficient manner,
          encompassing all aspects, whether you are an individual, SME or
          multinational company.
        </p>
      </div>
      <div className='our-services'>
        <h1>Our Services</h1>
        <div className='contents'>
          <p>
            CCA’s dedicated team are readily available to meet and service your
            import/export needs. We assure to serve you in a fast and cost
            efficient manner, encompassing all aspects, whether you are an
            individual, SME or multinational company.
          </p>
          <div className='service-content'>
            <div className='service-image' />
            <ul>
              <li>Import Air / Sea cargo reporting</li>
              <li>Export Air / Sea cargo reporting</li>
              <li>Personal Effects (PE) Clearances</li>
              <li>Cargo clearances over AU$1000</li>
              <li>Self-assessed Clearance (SAC) reporting</li>
              <li>Delivery and warehousing solutions</li>
              <li>Customer solution support</li>
              <li>
                Document delivery, process and bill clearing / checking off
                functions
              </li>
              <li>Retrieval of delivery orders</li>
              <li>Delivery / collection of industry documentation</li>
              <li>AQIS / IFIP document processing</li>
              <li>Airline document and counter processing</li>
              <li>Attendance at AQIS / Customs inspections and examinations</li>
              <li>Dispatch centre for transport companies</li>
              <li>Clearing House of Industry affiliates – Australia wide</li>
              <li>Online solutions</li>
              <li>Customer solution support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='quote'>
        <h2>REQUEST A FREE QUOTE TODAY</h2>

        <Link to='/contact-us' className='button-link'>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
