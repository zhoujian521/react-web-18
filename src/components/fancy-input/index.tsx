import React from 'react';

export interface Props {
	children: React.ReactNode | React.ReactNode[];
}

const FancyInput = React.forwardRef((props: Props, ref: any): JSX.Element => {
	return (
		<div>
			<input ref={ref} type="text" />
			{props.children}
		</div>
	);
});

export default FancyInput;
