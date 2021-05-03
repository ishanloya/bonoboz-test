export async function get() {
	const result = await fetch(
		`https://cdn.contentful.com/spaces/6gp6r6wc0ti4/environments/master/entries?access_token=1QFc6xpshWiX9NDWuEE2EOSnYrfh4_HDF3H4I8PvACU&content_type=jobPost`
	);

	const data = await result.json();
	const jobs = data.items;

	if (jobs) {
		return {
			body: jobs
		};
	}
}
