import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBriefcase,
	faCoffee,
	faStop,
} from '@fortawesome/free-solid-svg-icons';

import Button from './components/Button';
import Layout from './components/Layout';
import TimeDisplay from './components/TimeDisplay';

const secondsInMin = 60;
const millisInSec = 1000;
let interval = null;

const twoDigitString = num => (num >= 10 ? num : `0${num}`);

export default () => {
	const [elapsed, setElapsed] = React.useState(0);
	const [maxTime, setMaxTime] = React.useState(0);
	const [darkMode, setDarkMode] = React.useState(false);

	const minutes = Math.floor((maxTime - elapsed) / secondsInMin);
	const seconds = (maxTime - elapsed) % secondsInMin;
	const time = `${twoDigitString(minutes)}:${twoDigitString(seconds)}`;

	const stopTimer = () => {
		if (interval) clearInterval(interval);
		interval = null;
		setMaxTime(0);
		setElapsed(0);
	};

	const startTimer = max => {
		stopTimer();
		setMaxTime(max * secondsInMin);
		interval = setInterval(() => setElapsed(e => e + 1), millisInSec);
	};

	const toggleDarkMode = () => {
		setDarkMode(darkMode => !darkMode);
	};

	if (elapsed === maxTime && interval) {
		stopTimer();
		for (let i = 0; i < 6; i++) {
			setTimeout(toggleDarkMode, i * 500);
		}
	}

	return (
		<Layout
			darkMode={darkMode}
			onToggleTheme={() => setDarkMode(darkMode => !darkMode)}
		>
			<div>
				<TimeDisplay isDark={darkMode}>{time}</TimeDisplay>
			</div>
			<div>
				<Button
					darkMode={darkMode}
					onClick={() => startTimer(25)}
					label="start work"
				>
					<FontAwesomeIcon icon={faBriefcase} />
				</Button>
				<Button
					darkMode={darkMode}
					onClick={() => startTimer(5)}
					label="start break"
				>
					<FontAwesomeIcon icon={faCoffee} />
				</Button>
				<Button darkMode={darkMode} onClick={() => stopTimer()} label="stop">
					<FontAwesomeIcon icon={faStop} />
				</Button>
			</div>
		</Layout>
	);
};
