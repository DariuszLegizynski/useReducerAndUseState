import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingUseState() {
	const [ loading, setLoading ] = useState(true); // to indicate, if there is something loading
	const [ error, setError ] = useState(""); //to show, if an error occured
	const [ post, setPost ] = useState({}); //an empty object will be fetched from the API endpoint

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1") // getting from jsonplaceholder the API with exacly 1 endpoint
			//after the request has been made, a promise is returned (response)
			.then((response) => {
				setLoading(false);
				setPost(response.data);
				setError(""); // this is here to clear all the previous messages, that might have been shown earlier
			})
			.catch((error) => {
				setLoading(false);
				setPost({}); // when there is an error, all the previous posts should be hidden in the browser (not shown in theb browser)
				setError("Something went wrong");
			});
	}, []);

	return (
		<div>
			useState:
			{loading ? "Loading" : post.title}
			{error ? error : null}
		</div>
	);
}

export default DataFetchingUseState;
