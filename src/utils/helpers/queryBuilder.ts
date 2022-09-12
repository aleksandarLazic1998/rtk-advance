interface IProps {
	baseQuery: string;
	queryObject: { [key: string]: string | number } | null;
}

export const queryBuilder = ({ baseQuery, queryObject }: IProps) => {
	const query = new URLSearchParams(baseQuery);

	if (queryObject) {
		Object.entries(queryObject).forEach((queryItem) => {
			const [key, value] = queryItem;
			query.append(key, String(value));
		});
	}
	if (process.env.REACT_APP_API_KEY) {
		query.append('apiKey', process.env.REACT_APP_API_KEY);
	}
	const decodedQueryString = decodeURIComponent(query.toString());

	return decodedQueryString.replace('=&', '?');
};
