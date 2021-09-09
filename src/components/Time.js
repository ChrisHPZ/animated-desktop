import React, { useEffect, useState } from 'react';

function TimeOfDay() {
	const [hourState, setHourState] = useState();
	useEffect(() => {
		const hour = new Date();
		setHourState(hour.getHours());
	}, [])
	return(
		<div className="time-of-day">
			<p className="date small">{hourState < 12 ? "Good Morning" : hourState < 18 ? "Good Afternoon" : "Good Evening"}</p>			
		</div>
	)
}
export default TimeOfDay;