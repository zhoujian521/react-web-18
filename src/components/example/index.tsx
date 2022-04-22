import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useFriendStatus } from '../../hooks/useFriendStatus';
import FancyButton from '../fancy-input';

function Example(): JSX.Element {
	// 声明一个新的叫做 “count” 的 state 变量
	const [count, setCount] = useState(0);
	const inputEl = useRef(null);

	const displayCount = useMemo(() => {
		if (count > 5) {
			return 1000;
		}
		return count * 1000;
	}, [count]);

	const isOnline = useFriendStatus({ friendId: count });

	// 相当于 componentDidMount 和 componentDidUpdate:
	useEffect(() => {
		// 使用浏览器的 API 更新页面标题
		document.title = `You clicked ${count} times`;
	}, [count]);

	const onButtonClick = useCallback(() => {
		// `current` 指向已挂载到 DOM 上的文本输入元素
		const inputRef = inputEl as any;
		inputRef && inputRef.current.focus();
	}, [inputEl]);

	return (
		<div>
			<>
				<p style={{ color: isOnline ? 'green' : 'black' }}>好友666</p>
				<p>You clicked {count} times</p>
				<button onClick={() => setCount(count + 1)}>Click me</button>{' '}
			</>
			<br />
			<>
				<FancyButton ref={inputEl}>
					<p>转发 refs 到 DOM 组件</p>
				</FancyButton>
				<button onClick={onButtonClick}>Focus the input</button>
			</>
			<>
				<p>{displayCount}</p>
			</>
		</div>
	);
}

export default Example;
