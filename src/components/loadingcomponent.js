import React from 'react';

// this is a functional component
// spinner is the icon and pulse is for rotation
// 3x speed , fw means forward spinning, text-primary means primary color
export const Loading = () => {
	return(
		<div className="col-12">
			<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
			<p>Loading . . .</p>
		</div>
	);
};