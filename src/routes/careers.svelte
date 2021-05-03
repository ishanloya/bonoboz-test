<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		const res = await fetch('/jobs.json');
		const jobs = await res.json();

		return {
			props: { jobs }
		};
	};
</script>

<script>
	export let jobs;
</script>

<section class="section">
	<div class="container">
		<div class="row">
			<div class="col-10 col-md-12 mx-auto">
				<h2 class="title">
					Current <span class="text">Openings<span class="text-overlay">Openings</span></span>
				</h2>
				<div class="job-list mt-64">
					{#each jobs as job}
						<div class="job-item">
							<div class="job-content">
								<h5 class="h5">{job.fields.title}</h5>
								<p>{job.fields.experience} of experience</p>
							</div>
							<a href="/jobs/{job.sys.id}" class="btn btn-pill btn-border-black">Know more</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
