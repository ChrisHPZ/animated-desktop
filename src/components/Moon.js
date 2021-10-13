import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const Moon = () => {
	
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [moonPhase, setMoonPhase] = useState('');
	const [sunRise, setSunRise] = useState('');
	const [sunSet, setSunSet] = useState('');
	const [moonRise, setMoonRise] = useState('');
	const [moonSet, setMoonSet] = useState('');
	
	const savePositionToState = (position) => {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
	}

	const fetchMoon = async () => {
		try {
			await navigator.geolocation.getCurrentPosition(savePositionToState);
			const res = await axios.get(
				`https://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`
			);
			setMoonPhase(res.data.astronomy.astro.moon_phase);
			setSunRise(res.data.astronomy.astro.sunrise);
			setSunSet(res.data.astronomy.astro.sunset);
			setMoonRise(res.data.astronomy.astro.moonrise);
			setMoonSet(res.data.astronomy.astro.moonset);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		fetchMoon();
	})
	return(
		<div className="moon-phase">
			<p className="date small">Moon Phase: {moonPhase}</p>
			<p className="date small">Sunrise: {sunRise}</p>
			<p className="date small">Sunset: {sunSet}</p>
			<p className="date small">Moon Rise: {moonRise}</p>
			<p className="date small">Moon Set: {moonSet}</p>
		</div>
	)
}

export default Moon;