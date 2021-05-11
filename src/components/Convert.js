import React, {useState, useEffect} from "react";
import Axios from "axios";

const Convert = ({language, text}) => {
	const [translated, setTranslated] = useState("");

	const [debouncedText, setDebouncedText] = useState("");

	useEffect(() => {
		// Adds a delay before the search is done to avoid multiple API calls
		// while the user is still typing.
		const timerId = setTimeout(() => {
			setDebouncedText(text);
		}, 500);

		// This cleanup function gets called at the start every time the component
		// rerenders, but only after the first time it renders
		return () => {
			clearTimeout(timerId);
		};
	}, [text]);

	useEffect(() => {
		const doTranslation = async () => {
			const {data} = await Axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
				params: {
					q: debouncedText,
					target: language.value,
					key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
				}
			});

			setTranslated(data.data.translations[0].translatedText);
		};

		doTranslation();

	}, [language, debouncedText])

	return (
		<div>
			<h1 className="ui header">
				{translated}
			</h1>
		</div>
	);
}

export default Convert;