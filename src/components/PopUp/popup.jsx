import React from 'react';

const popup = (props) => {
	const showclassNamees = ['exit-intent-overlay', 'exit-intent-overlay-scroll'];
	if (props.show) {
		showclassNamees.push('show');
	}
	return (
	<div className={showclassNamees.join(" ")}  onClick={props.hide}>
	  <section className="exit-intent inline-subscribe registration-margin-top">
	    <div className="display-table-cell exit-intent__content">
	      <h2 className="exit-intent-header">{props.t('SERIAL_WHERE')}</h2>
	      <h3>{props.t('ALL_EXCEPT_725')}</h3>
	      <p>{props.t('SERIAL_LOCATION_ALL')}</p>
	      <img alt={props.t('ALL_EXCEPT_725')} id="helper_image" src="//s3.amazonaws.com/blendtec.com/images/Support/blender-serial-location.jpg" />
	      <hr />
	      <h3>{props.t('DESIGNER_725')}</h3>
	      <p>{props.t('SERIAL_LOCATION_725')}</p>
	      <img alt={props.t('SERIAL_LOCATION_725')} src="//s3.amazonaws.com/blendtec.com/images/Support/blender-serial-location-725.jpg" />
	      <button onClick={props.hide} className="btn one-whole">{props.t('OK')}</button>
	    </div>
	  </section>
	</div>
	);
};

export default popup;