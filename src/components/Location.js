import React from 'react';
import { Circles } from 'react-loading-icons';

const font = {
	fontSize: 30,
	color: "#ffffff"
}

function getLocation() {
	navigator.geolocation.getCurrentPosition(position => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		document.getElementById('latitude').textContent = lat;
		document.getElementById('longitude').textContent = lon;
		console.log(position);
	})
}

class Location extends React.Component {	
	state = {
		loading: true
	}
	
	async componentDidMount() {
		getLocation();
		this.setState({loading: false});
	}
  
	render() {
		return (
			<div className="weather">
				{this.state.loading ? (
					<div style={font}><Circles /></div> 
				) : (
					<div>
						<p className="date small"><span id="latitude"></span>&deg;</p>
						<p className="date small"><span id="longitude"></span>&deg;</p>
					</div>
				)}
			</div>
		)
	}
}
  
export default Location;