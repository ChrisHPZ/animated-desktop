import React, { Component } from 'react';
import { Circles } from 'react-loading-icons';

const API_KEY = process.env.REACT_APP_API_KEY;
const font = {
	fontSize: 30,
	color: "#ffffff"
}

navigator.geolocation.getCurrentPosition(function(position) {
	console.log(position);
	return [position.coords.latitude,position.coords.longitude];
});

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			tempurature: null
		}
	}

	async componentDidMount() {
		const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=44212&aqi=no`;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({tempurature: data.current, loading: false});
	}
  
	render() {
		return (
			<div className="weather">
				{this.state.loading || !this.state.tempurature ? (
					<div style={font}><Circles /></div> 
				) : (
					<div>
						<div style={font}>
							{this.state.tempurature.temp_f}&#176;						
						</div>
						<p className="date small">{this.state.tempurature.condition.text}</p>
						<img src={this.state.tempurature.condition.icon} alt="icon" />
					</div>
				)}
			</div>
		)
	}
}
  
export default Weather;