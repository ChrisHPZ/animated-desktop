import React, { useEffect, useState } from 'react';

function Clock() {
	// Actual clock component
	const [clockState, setClockState] = useState();

	// Current day, month and date
	const [currentDate, setCurrentDate] = useState();
	const [currentMonth, setCurrentMonth] = useState();
	const [currentDay, setCurrentDay] = useState();
	
	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setClockState(date.toLocaleTimeString());
		}, 1000);
	}, [])

	useEffect(() => {
		const today = new Date();
		setCurrentDate(today.toLocaleString("default", { weekday: "long" } ));
		setCurrentMonth(today.toLocaleString( "default", { month: "long" }));
		setCurrentDay(today.getDate());
	}, [])

	return(
		<div>
			<p className="time">{clockState}</p>
			<p className="date">{currentDate}, {currentMonth} {currentDay}</p>
		</div>
	)
}
export default Clock