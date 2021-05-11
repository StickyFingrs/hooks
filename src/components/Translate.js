import React, { useState } from "react";
import Dropdown from "./Dropdown.js";
import Convert from "./Convert.js";

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
	},
	{
		label: "Dutch",
		value: "nl"
	},
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
			<br/>
			<hr/>
			<h1 className="ui header">Translation Output</h1>
			<Convert text={text} language={language}/>
		</div>
	)
}

export default Translate;