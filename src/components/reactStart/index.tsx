import React from 'react';
import classNames from 'classnames';

interface IImageProps {
	message?: string;
	className?: string;
}

function Image({ message = '您没有收到任何消息', className }: IImageProps) {
	return <div>111</div>;
}

export default Image;
