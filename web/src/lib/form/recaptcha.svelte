<script lang="ts">
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';
	import { createEventDispatcher, onMount } from 'svelte';

	let script: HTMLScriptElement;
	export let action = 'leadform';
	const dispatch = createEventDispatcher();
	const key = PUBLIC_RECAPTCHA_SITE_KEY;
	const url = new URL('https://recaptcha.net/recaptcha/api.js');
	url.searchParams.set('render', key);

	onMount(() => {
		script.onload = () => {
			setTimeout(() => {
				window.grecaptcha.execute(key, { action }).then(
					(token) => {
						dispatch('load', { token });
					},
					() => {
						dispatch('error');
					}
				);
			}, 500);
		};
	});
</script>

<svelte:head>
	<script bind:this={script} type="text/javascript" async defer src={url.toString()}></script>
</svelte:head>
