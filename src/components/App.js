import React, {useState} from 'react';
import Header from './Header.js';
import Route from './Route.js';
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

const App = () => {
	const [selected, setSelected] = useState(colourOptions[0])
	return (
		<div>
			<Header/>
			<Route path="/">
				<Accordion items={items}/>
			</Route>

			<Route path="/search">
				<WikipediaSearch/>
			</Route>

			<Route path="/list">
				<Dropdown 
					label="Select a Colour" 
					options={colourOptions}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>

			<Route path="/translate">
				<Translate/>
			</Route>
		</div>
	);
}

export default App;