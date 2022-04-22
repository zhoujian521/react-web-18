import React from 'react';
import classNames from 'classnames';

import logo from '../../../src/assets/images/logo.svg';

import './style.scss';

export interface ReactStartProps {
	href?: string;
}

function ReactStart(props: ReactStartProps): JSX.Element {
	const { href = '' } = props;

	return (
		<div className="start-container">
			<header className="header">
				<img src={logo} className="react-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="link" href={href} target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default ReactStart;
