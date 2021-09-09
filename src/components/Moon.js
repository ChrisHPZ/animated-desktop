import React from 'react';
import { Circles } from 'react-loading-icons';
import { IconContext } from 'react-icons';
import { WiMoonAltWaningGibbous3 } from 'react-icons/wi'

const style = {
	margin: "0 auto"
}
const API_KEY = process.env.REACT_APP_API_KEY;
class Moon extends React.Component {
	
	state = {
		loading: true,
		astronomy: null
	}

	async componentDidMount() {
		const url = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=44212&aqi=no`;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ astronomy: data.astronomy, loading: false});
	}

	render() {
		return(
			<IconContext.Provider value={{ color: "white", size:"100px" }}>
				{this.state.loading || !this.state.astronomy ? (
					<div><Circles /></div>
				) : ( 
					<div className="moon-phase">
						<WiMoonAltWaningGibbous3 style={style} />
						<p className="date small">{this.state.astronomy.astro.moon_phase}</p>
					</div>
				)}				
			</IconContext.Provider>
		)
	}	
}

export default Moon;