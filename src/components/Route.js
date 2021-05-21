import {useState, useEffect} from 'react';

// Clicking the links reloads the entire page, i.e the entire HTML file,
// CSS, JavaScript, etc. Ideally, we just re-render the relevant components
// as necessary.
const Route = ({path, children}) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		}

		window.addEventListener("popstate", onLocationChange);

		// Cleanup function
		return () => {
			window.removeEventListener("popstate", onLocationChange);
		};
	}, []);

	return currentPath === path ? children	: null;
};

export default Route;