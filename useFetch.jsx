import { useState, useEffect } from 'react';
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(`/public/${url}`)
				.then((resp) => {
					if (!resp.ok) {
						throw Error('Sorry! Could not fetch the data.');
					}
					return resp.json();
				})
				.then((data) => {
					setData(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err.message);
				});
		}, 500);
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
