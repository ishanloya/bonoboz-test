<script context="module">
	export const load = async ({ page, fetch }) => {
		const res = await fetch(`/jobs/${page.params.slug}.json`);
		const job = await res.json();
		console.log(job);

		return {
			props: { job }
		};
	};
</script>

<script>
	export let job;
</script>

<section class="section">
	<div class="container">
		<article class="row entry-career" id="post-134">
			<div class="col-1 col-md-12" />
			<div class="col-8 col-md-12 b--font-lg">
				<div class="breadcrumb">
					<span
						><span
							><a href="/">Home</a> »
							<span
								><a href="/careers">Careers</a> »
								<strong class="breadcrumb_last" aria-current="page">{job.fields.title}</strong
								></span
							></span
						></span
					>
				</div>
				<h1 class="title">{job.fields.title}</h1>
				<h4><strong>{job.fields.experience} of experience</strong></h4>

				{job.fields.description}
			</div>
		</article>
	</div>
</section>
