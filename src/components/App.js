import React from 'react';
import Accordion from './Accordion.js';
import Dropdown from './Dropdown.js';
import WikipediaSearch from './WikipediaSearch.js';
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

class App extends React.Component {
	render () {
		return (
			<div>
				<Dropdown/>

			</div>
		);
	};
}

export default App;