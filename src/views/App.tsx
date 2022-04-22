import React from 'react';
import { ReactStart, Example } from '../components';

import './style.scss';

function App() {
	const ref = React.createRef();
	return (
		<div className="app-container">
			<ReactStart href="https://reactjs.org"></ReactStart>
			<Example />
		</div>
	);
}

export default App;
