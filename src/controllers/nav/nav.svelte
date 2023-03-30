<script>
	import { navLinks } from '../../utils/variables';
</script>

<nav>
	<div class="header-wrapper">
		<div>logo</div>
		<ol>
			{#each navLinks as link}
				<li>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ol>
	</div>
</nav>

<style>
	nav {
		background-color: white;
		position: fixed;
		top: 0;
		z-index: 11;
		
		width: 100%;
		height: var(--nav-height);
	}
    .header-wrapper {
        display: flex;
		align-items: center;
		justify-content: space-between;
        height: 100%;
        padding: 0px 50px;
    }
	ol {
		display: flex;
		align-items: center;
		justify-content: space-between;

	}
</style>
