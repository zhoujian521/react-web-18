import React, { useState, useEffect } from 'react';

export interface UseFriendProps {
	friendId: string | number;
}

let timer: NodeJS.Timeout | null = null;

export const useFriendStatus = (props: UseFriendProps): boolean | null => {
	const [isOnline, setIsOnline] = useState(false);

	useEffect(() => {
		timer = setInterval(() => {
			setIsOnline(!isOnline);
		}, 1000);
		return () => {
			timer && clearInterval(timer);
		};
	}, [isOnline]);

	return isOnline;
};
