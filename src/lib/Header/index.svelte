<script>
	import { page } from '$app/stores';
</script>

<header id="header">
	<div class="container header-container">
		<a href="https://www.bonoboz.in/" class="brand"
			><img
				src="https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/logo.svg"
				alt="Bonoboz"
			/></a
		>
		<nav class="navbar">
			<ul class="main-menu">
				<li class="mega--menu">
					<a href="/about">WHAT WE DO</a>
					<div class="mega--menu__dropdown">
						<ul class="mega--menu__left">
							<li class="active">
								<a href="https://www.bonoboz.in/digital-marketing/">
									<img
										src="https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/menu/digital.svg"
										alt=""
									/>
									<span>Digital <br />Marketing</span>
								</a>
							</li>
							<li>
								<a href="https://www.bonoboz.in/web-development/">
									<img
										src="https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/menu/website.svg"
										alt=""
									/>
									<span>Website <br />Development</span>
								</a>
							</li>
							<li>
								<a href="https://www.bonoboz.in/design-and-creative-services/">
									<img
										src="https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/menu/design.svg"
										alt=""
									/>
									<span>Design & <br />Creative Services</span>
								</a>
							</li>
							<li>
								<a href="https://www.bonoboz.in/technology/">
									<img
										src="https://www.bonoboz.in/wp-content/themes/bonoboz/assets/images/svg/menu/tech.svg"
										alt=""
									/>
									<span>Technology</span>
								</a>
							</li>
						</ul>
						<div class="mega--menu__right">
							<div class="mega--menu__right-options active">
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/digital-marketing/social-media/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Social Media</span>
										<p>Make a social splash</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/digital-marketing/campaign-management-services/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Campaign Management</span>
										<p>Drive goals and targets</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/digital-marketing/email-marketing-services/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Email Marketing</span>
										<p>Build & nurture direct connections</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/digital-marketing/ppc-management-services/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">PPC Management</span>
										<p>Build targeted visibility</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/digital-marketing/seo-services-company/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">SEO Services</span>
										<p>Establish an organic presence</p>
									</a>
								</div>
							</div>
							<div class="mega--menu__right-options">
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/web-development/corporate-website-development/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Corporate Website Development</span>
										<p>Make a glorious first impression</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/web-development/wordpress-development/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Wordpress Development</span>
										<p>Beautiful & functional websites</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/web-development/ecommerce-website-development/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Ecommerce Development</span>
										<p>Build fast, engaging shopping experiences</p>
									</a>
								</div>
							</div>
							<div class="mega--menu__right-options">
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/design-and-creative-services/website-design/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Website Design</span>
										<p>Create seamless & engaging designs</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/design-and-creative-services/mobile-app-design/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Mobile App Design</span>
										<p>Modern, easy-to-use UI / UX</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/design-and-creative-services/brand-identity-and-logo/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Brand Identity and Logo</span>
										<p>Design & create a brand story</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/design-and-creative-services/marketing-collaterals/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Marketing Collaterals</span>
										<p>Amplify your message in style</p>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/design-and-creative-services/video-production/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Video Production</span>
										<p>Visual stories that make an impression</p>
									</a>
								</div>
							</div>
							<div class="mega--menu__right-options">
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/technology/custom-software-development/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Custom Software Development</span>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/technology/app-development/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">App Development</span>
									</a>
								</div>
								<div class="mega--menu__right-col">
									<a
										href="https://www.bonoboz.in/technology/product-development/"
										class="mega--menu__right-link"
									>
										<span class="menu--title">Product Development</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li><a href="/case-studies">CASE STUDIES</a></li>
				<li><a href="/who-we-are">WHO WE ARE</a></li>
				<li><a href="/careers">WORK WITH US</a></li>
			</ul>
			<div class="child-menu">
				<a href="/about" class="menu-back">What We do</a>
				<div class="child-menu__content">
					<a href="/" class="child-menu__head">Digital Marketing</a>
					<div class="child-menu__body">
						<a href="https://www.bonoboz.in/digital-marketing/">Marketing</a>
						<a href="https://www.bonoboz.in/digital-marketing/social-media/">Social Media</a>
						<a href="https://www.bonoboz.in/digital-marketing/campaign-management-services/"
							>Campaign Management</a
						>
						<a href="https://www.bonoboz.in/digital-marketing/email-marketing-services/"
							>Email Marketing</a
						>
						<a href="https://www.bonoboz.in/digital-marketing/ppc-management-services/"
							>PPC Management</a
						>
						<a href="https://www.bonoboz.in/digital-marketing/search-engine-marketing-sem/"
							>Search Engine Marketing</a
						>
						<a href="https://www.bonoboz.in/digital-marketing/seo-services-company/">SEO Services</a
						>
					</div>
					<a href="/" class="child-menu__head">Website Development</a>
					<div class="child-menu__body">
						<a href="https://www.bonoboz.in/web-development/">Development</a>
						<a href="https://www.bonoboz.in/web-development/corporate-website-development/"
							>Corporate Website Development</a
						>
						<a href="https://www.bonoboz.in/web-development/wordpress-development/"
							>Wordpress Development</a
						>
						<a href="https://www.bonoboz.in/web-development/ecommerce-website-development/"
							>Ecommerce Development</a
						>
					</div>
					<a href="/" class="child-menu__head">Design & Creative Services</a>
					<div class="child-menu__body">
						<a href="https://www.bonoboz.in/design-and-creative-services/">Services</a>
						<a href="https://www.bonoboz.in/design-and-creative-services/website-design/"
							>Mobile App Design</a
						>
						<a href="https://www.bonoboz.in/design-and-creative-services/mobile-app-design/"
							>Mobile App Design</a
						>
						<a href="https://www.bonoboz.in/design-and-creative-services/brand-identity-and-logo/"
							>Brand Identity and Logo</a
						>
						<a href="https://www.bonoboz.in/design-and-creative-services/marketing-collaterals/"
							>Marketing Collaterals</a
						>
						<a href="https://www.bonoboz.in/design-and-creative-services/video-production/"
							>Video Production</a
						>
					</div>
					<a href="/" class="child-menu__head">Technology</a>
					<div class="child-menu__body">
						<a href="https://www.bonoboz.in/technology/">Technology</a>
						<a href="https://www.bonoboz.in/technology/custom-software-development/"
							>Custom Software Development</a
						>
						<a href="https://www.bonoboz.in/technology/app-development/">App Development</a>
						<a href="https://www.bonoboz.in/technology/product-development/">Product Development</a>
					</div>
				</div>
			</div>
		</nav>
		<a href="https://www.bonoboz.in/project-planner/" class="btn btn-pill btn-blue ml-32"
			>Get Started</a
		>
		<button type="button" id="hamburger"><span /></button>
	</div>
</header>
