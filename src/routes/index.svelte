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

<svelte:head>
	<title>Home</title>
</svelte:head>

<div id="content" class="site-content">
	<section id="intro" class="home-intro">
		<div class="container">
			<div class="row no-guttor align-items-center">
				<div class="col-5 col-md-12">
					<h1 class="intro-title title animatt">
						Identify. <span class="text">Create. <span class="text-overlay">Create.</span></span> Disrupt.
					</h1>
					<div class="intpro-content animatt fade-up">
						<p>
							In other words, we help your brand get the traction and reach it deserves. To simplify
							it further, you will now get more customers!
						</p>
						<a
							href="https://www.bonoboz.in/contact-us/"
							class="btn btn-pill btn-blue btn-lg animatt fade-up">Let's Talk</a
						>
					</div>
				</div>
				<div class="col-1 col-md-12" />
				<div class="col-6 col-md-12 hero-img">
					<div class="hero-img-container" id="heroImage">
						<div
							class="hero-bg"
							data-depth="0.20"
							style="background-image: url(https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/hero/hero-1.svg)"
						/>
						<div
							class="hero-bg"
							data-depth="0.40"
							style="background-image: url(https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/hero/hero-2.svg)"
						/>
						<div
							class="hero-bg"
							data-depth="0.60"
							style="background-image: url(https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/hero/hero-3.svg); background-position: bottom left"
						/>
						<div
							class="hero-bg"
							data-depth="0.80"
							style="background-image: url(https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/hero/hero-4.svg)"
						/>
						<div
							class="hero-bg"
							data-depth="1.00"
							style="background-image: url(https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/hero/hero-5.svg)"
						/>
					</div>
				</div>
			</div>
			<a href="#digital" id="scrollDown">
				<span class="icon" />
				<span class="text">Scroll down</span>
			</a>
		</div>
	</section>

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
								<a href="/" class="btn btn-pill btn-border-black">Know more</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
