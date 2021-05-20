import React from 'react';
import Accordion from './Accordion.js';
import WikipediaSearch from './WikipediaSearch.js';
import Dropdown from './Dropdown.js';
import Translate from './Translate.js';

const items = [
	{
		title: "What is React?",
		content: "Blachfiawjeoifasdnuifn iwua fasduifiuhweiuf dkfloawefoi awjosdfmio awejf oawifjoasijdf"
	}, 
	{
		title: "Why is React?",
		content: "Blaasdfasdfwe wefd htrh gfncbv sdfg erg dvbaergae rfijdf"
	}, 
	{
		title: "Who is React?",
		content: "nstr aiosdjfio awjfo iuahuidu fiawn ifuaweuifh asdiofniuawehfi asdfol aweo basd"
	}
]

const colourOptions = [
	{
		label: "Red Colour",
		value: "red"
	},
	{
		label: "Blue Colour",
		value: "blue"
	}, 
	{
		label: "Green Colour",
		value: "green"
	}
]

const showAccordion = () => {
	if (window.location.pathname === '/') {
		return <Accordion items={items}/>;
	}
}

const showSearch = () => {
	if (window.location.pathname === '/search') {
		return <WikipediaSearch/>;
	}
}

const showDropdown = () => {
	if (window.location.pathname === '/dropdown') {
		return <Dropdown label="Select a Colour" options={colourOptions}/>;
	}
}

const showTranslate = () => {
	if (window.location.pathname === '/translate') {
		return <Translate items={items}/>;
	}
}
const App = () => {
	return (
		<div>
			{showAccordion()}
			{showSearch()}
			{showDropdown()}
			{showTranslate()}
		</div>
	);
}

export default App;