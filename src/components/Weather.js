import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const font = {
	fontSize: 30,
	color: "#ffffff"
}

const Weather = () =>  {

	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [tempurature, setTempurature] = useState('');
	const [wind, setWind] = useState('');
	const [conditionText, setConditionText] = useState('');
	const [conditionIcon, setConditionIcon] = useState('');

	const savePositionToState = (position) => {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
	}

	const fetchWeather = async () => {
		try {
			await navigator.geolocation.getCurrentPosition(savePositionToState);
			const res = await axios.get(
				`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`
			);
			setTempurature(res.data.current.temp_f);
			setWind(res.data.current.wind_mph);
			setConditionText(res.data.current.condition.text);
			setConditionIcon(res.data.current.condition.icon);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		fetchWeather();
	})
	
	return(
		<div className="weather">
			<div style={font}>
				{Math.round(tempurature)}&#176;
			</div>
			<p className="date small">Wind Speed: {wind}</p>
			<p className="date small">{conditionText}</p>
			<p className="date small"><img src={conditionIcon} alt={conditionText} /></p>
		</div>
	)
}

export default Weather;