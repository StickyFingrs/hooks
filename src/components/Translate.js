import React, { useState } from "react";
import Dropdown from "./Dropdown.js";

const options = [
	{
		label: "Afrikaans",
		value: "af"
	},
	{
		label: "Arabic",
		value: "ar"
	},
	{
		label: "Hindi",
		value: "hi"
	}
]
const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="translateInput">Enter the text to translate here:</label>
					<input id="translateInput" value={text} onChange={(event) => {setText(event.target.value)}}/>	
				</div>
			</div>
			
			<Dropdown 
				label="Select a Language"
				options={options} 
				selected={language} 
				onSelectedChange={setLanguage}
			/>

			<div>
				
			</div>
		</div>
	)
}

export default Translate;