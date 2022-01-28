import classes from './clearances.module.css';

const Export = () => {
  return (
    <div>
      <p className={classes.title}>Export Clearances</p>
      <svg width='50' height='25' className={classes.line}>
        <line
          x1='50'
          y1='0'
          x2='250'
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
            <h5>Documents for </h5>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Export;
