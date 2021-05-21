import React from 'react';

const Link = ({className, href, children}) => {
	const onClick = (event) => {
		// Enables CTRL + M1 to open link in new tab
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		// Update URL
		window.history.pushState({}, "", href);

		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	}

	return (
		<a 
			onClick={onClick}
			className={className} 
			href={href}
		>{children}</a>
	)
}

export default Link;