export async function get({ params }) {
	const result = await fetch(
		`https://cdn.contentful.com/spaces/6gp6r6wc0ti4/environments/master/entries/${params.slug}?access_token=1QFc6xpshWiX9NDWuEE2EOSnYrfh4_HDF3H4I8PvACU&`
	);

	const data = await result.json();

	if (data) {
		return {
			body: data
		};
	}
}
