import React, {useState} from 'react';

const Accordion = (props) => {
	// activeIndex is the piece of state, setActiveIndex is the function to change said state,
	// and the value in the brackets in useState is the initial value.
	// The variable names in the square brackets are not special; any name can be used
	//
	// These are the functional component equivalents of state management in class-based
	// React components.
	const [activeIndex, setActiveIndex] = useState(null);

	// These following 3 lines are identical to the line above ^^ (array destructuring)
	// const blah = useState(null);
	// const activeIndex = blah[0];
	// const setActiveIndex = blah[1];

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedList = props.items.map((item, index)=> {
		const active = index === activeIndex ? "active" : '';

		return(
			// React.Fragment is used here because when <div> is used
			// there is an extra border-top on the div (more visible 
			// if you add a line break): https://reactjs.org/docs/fragments.html
			<React.Fragment key={item.title}>
				<div 
					className={`title ${active}`}
					onClick={() => onTitleClick(index)}
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return (
		<div className="ui styled accordion">
			{renderedList}
		</div>
	);
};

export default Accordion;