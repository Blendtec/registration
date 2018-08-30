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
	      <h2 className="exit-intent-header">Where is my Serial Number</h2>
	      <h3>All Blenders Except the Designer 725</h3>
	      <p>You can find the serial number on the bottom of your blender base.</p>
	      <img id="helper_image" src="//s3.amazonaws.com/blendtec.com/images/Support/blender-serial-location.jpg" />
	      <hr />
	      <h3>Designer 725</h3>
	      <p>Hold down the red ‘X’ on your blender, then select ‘Rewards.’ This will display the serial number along with your last reward code.</p>
	      <img src="//s3.amazonaws.com/blendtec.com/images/Support/blender-serial-location-725.jpg" />
	      <button onClick={props.hide} className="btn one-whole">OK</button>
	    </div>
	  </section>
	</div>
	);
};

export default popup;