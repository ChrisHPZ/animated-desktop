import React from 'react';

const Conditions = (props) => {
	const style = {
		fontSize: 30,
		color: "#ffffff"
	}
	function getWeather() {
		fetch("http://api.weatherapi.com/v1/current.json?key=4d5a7149cf1e42b98e7103506212708&q=44212&aqi=no")
		.then(response => response.json())
       	.then(response => {
           setResponseObj(response)
		   console.log(response)
       	})
		.catch(err => {
			console.error(err);
		});
	}
	return(
		<div>
			<div style={style} >
				{Math.round(props.response.current.temp_f)}&#176;
				<div className="small">{props.response.current.condition.text}</div>
			</div>
			<button onClick={getWeather}>Get Forecast</button>
		</div>
	)
}

export default Conditions;