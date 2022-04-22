import React from 'react';
import classNames from 'classnames';

import logo from '../../src/assets/images/logo.svg';
import './style.scss';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
				<a className={classNames('link-colors', 'link-colors-2')} href="https://reactjs.org">
					https://reactjs.org
				</a>
			</header>
		</div>
	);
}

export default App;
