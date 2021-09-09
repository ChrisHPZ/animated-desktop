import Clock from './components/Clock';
import Weather from './components/Weather';
import TimeOfDay from './components/Time';
import Moon from './components/Moon'
import './App.css';

function App() {
  return (
	<>
		<div className="columns">
			<div className="flex-item">
				<Weather />
				<TimeOfDay />
				<Moon />
			</div>		
		</div>
		<div className="absolute">
			<Clock />
		</div>
	</>
  );
}

export default App;