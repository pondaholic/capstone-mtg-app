import React from 'react';
import homeImage from '../mtg-bg.jpg';

export default function Background() {
	return (
		<div className="homepage-image">
			<img src={homeImage} alt="homepage stand-in when no searches" />
		</div>
	);
}
