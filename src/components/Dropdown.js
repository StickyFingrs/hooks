import React, {useEffect, useState, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
	// Determines if dropdown is open or not
	const [open, setOpen] = useState(false);

	const renderedOptions = options.map((option) => {
		// Don't show the option in the dropdown if it is currently selected
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => onSelectedChange(option)}
			>
				{option.label}
			</div>
		)
	});

	return (
		<div className="ui form">
			<div className="field">
				<label className="label">Select a Colour</label>
				<div 
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open == true ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open == true ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dropdown;