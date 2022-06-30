import React from 'react';


export function NotificationItem({ type, value, html}) {
	if (html === undefined)
		return (
			<li data-priority={type}>
				{value}
			</li>
		);
	return (
		<li data-priority={type} dangerouslySetInnerHTML={html}></li>
		);
};

export default NotificationItem;
