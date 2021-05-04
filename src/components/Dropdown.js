import React, {useEffect, useState, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
	// Determines if dropdown is open or not
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		// Makes the dropdown close when an option is selected
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)){
				return;
			}

			setOpen(false);
		}

		// This event listener gets called first as it's added as a manual event
		// listener and not through React. This may cause some issue as this causes the
		// dropdown to not close when an option is selected.
		document.body.addEventListener("click",	onBodyClick, {capture: true});

		// Cleanup function to remove listener, otherwise ref.current becomes null and causes an error
		return () => {
			document.body.removeEventListener("click",	onBodyClick, {capture: true});
		}
	}, []);

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
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">Select a Colour</label>
				<div 
					// Because this onClick event listener only occurs after the event listener in the body,
					// since this just flips the open boolean to the opposite value, it just
					// looks like the dropdown remained open, although technically it did close
					// for a very short time.
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open === true ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open === true ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dropdown;