import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const WikipediaSearch = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	// useEffect allows functional components to use
	// something similar to lifecycle methods. 
	// This second argument in useEffect determines 
	// when it's executed, e.g:
	// 1. When the component is rendered for the first time only (empty array)
	// 2. When the component is rendered for the first time and
	//    whenever it rerenders (no array)
	// 3. When the component is rendered for the first time and
	//    whenever it rerenders and some piece of data has changed (an array containing
	//	  the variables that you want to be checked)

	// Adds a delay before the search is done to avoid multiple API calls
	// while the user is still typing.
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
		}, 1000);

		// This cleanup function gets called at the start every time the component
		// rerenders, but only after the first time it renders
		return () => {
			clearTimeout(timerId);
		};
	}, [searchTerm]);

	useEffect(() => {
		const search = async () => {
			// GET request
			const { data } = await Axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: debouncedSearchTerm
				}
			});

			// Populates searchResults array
			setSearchResults(data.query.search);

			// Prevents the an error for no search term
			if (debouncedSearchTerm){
				search();
			}
		};
	}, [debouncedSearchTerm]);

	const renderedResults = searchResults.map((searchResult) => {
		return (
		<div key={searchResult.pageid} className="item">
			<div className="right floated content">
				<a href={`https://en.wikipedia.org?curid=${searchResult.pageid}`} className="ui button">Go</a>
			</div>

			<div className="content">
				<a href={`https://en.wikipedia.org?curid=${searchResult.pageid}`} className="header">
					{searchResult.title}
				</a>

				{/* This following line is to get rid of the HTML tags that appear when
				the search is done. If searchResult.snippet is just shown on its own
				the search results look ugly.
				WARNING!!!! NEVER ACTUALLY DO THIS IN A REAL LIVE APP. THIS OPENS UP THE APP
				TO POTENTIAL XSS ATTACKS AS IT ALLOWS HTML CODE TO BE FREELY RUN. THIS
				IS ONLY DONE HERE BECAUSE THERE IS NO SENSITIVE DATA INVOLVED.  */} 
				<span dangerouslySetInnerHTML={{__html: searchResult.snippet}}/>
			</div>
		</div>
		)
	})
	return(
		<div>
			{/* Search Query */}
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input 
						value={searchTerm}
						className="input"
						onChange={event => setSearchTerm(event.target.value)}
					/>
				</div>
			</div>

			{/* Search Results */}
			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	) 
}

export default WikipediaSearch;