<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;

	let inputValue = data.name || '';
	let debounceTimer;

	function handleInput(event) {
		inputValue = event.target.value;

		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			const params = new URLSearchParams();
			if (inputValue.trim()) {
				params.set('name', inputValue.trim());
			}
			goto(`?${params.toString()}`, { replaceState: true });
		}, 750);
	}
</script>

<svelte:head>
	<title>Prever idade - Descubra a idade por nome</title>
	<meta
		name="description"
		content="Aplicação que prediz idade baseada serviço Agify.io de previsão"
	/>
</svelte:head>

<main>
	<div class="container">
		<header>
			<h1>
				<img
					src="/icon-title.png"
					alt="icone-titulo"
					width="60"
					height="60"
					style="vertical-align: middle; margin-right: 8px;"
				/>
				Prever idade
			</h1>
			<p class="subtitle">Descubra a idade estimada de qualquer nome</p>
		</header>

		<div class="search-section">
			<div class="input-container">
				<input
					type="text"
					placeholder="Digite um nome..."
					bind:value={inputValue}
					on:input={handleInput}
					class="name-input"
					autocomplete="off"
					spellcheck="false"
				/>
				<div class="input-glow"></div>
			</div>
		</div>

		<div class="result-section">
			{#if data.result}
				<div class="result-card">
					<div class="result-header">
						<h2>
							<img
								src="/grafico.png"
								alt="icone-grafico"
								width="38"
								height="38"
								style="vertical-align: middle; margin-right: 8px;"
							/>
							Resultado para "{data.result.name}"
						</h2>
					</div>
					<div class="result-content">
						<div class="age-display">
							<span class="age-number">{data.result.age}</span>
							<span class="age-label">anos</span>
						</div>
						<div class="count-info">
							<p>
								Baseado em <strong>{data.result.count?.toLocaleString('pt-BR') || 'N/A'}</strong> registros
							</p>
						</div>
					</div>
				</div>
			{:else if inputValue.trim()}
				<div class="loading">
					<div class="spinner"></div>
					<p>Analisando o nome "{inputValue}"...</p>
				</div>
			{:else}
				<div class="empty-state">
					<img
						src="/alvo.png"
						alt="icone-alvo"
						width="50"
						height="50"
						style="vertical-align: middle; margin-right: 8px;"
					/>
					<h3>Comece digitando um nome</h3>
					<p>Nossos serviços irá prever a idade mais provável baseada em milhões de dados</p>
				</div>
			{/if}
		</div>

		<footer>
			<p>Powered by <a href="https://agify.io" target="_blank" rel="noopener">Agify.io</a></p>
		</footer>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background: linear-gradient(135deg, rgb(12, 17, 21) 0%, #0b1316 100%);
		min-height: 100vh;
		overflow-x: hidden;
	}

	main {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	.container {
		width: 100%;
		max-width: 600px;
		background: rgba(11, 19, 22, 0.95);
		backdrop-filter: blur(20px);
		border-radius: 24px;
		padding: 40px;
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(40, 110, 45, 0.3);
	}

	header {
		text-align: center;
		margin-bottom: 40px;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		background: linear-gradient(135deg, #40aa34, #286e2d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 10px 0;
	}
	.subtitle {
		color: #9ca3af;
		font-size: 1.1rem;
		margin: 0;
		opacity: 0.8;
	}

	.search-section {
		margin-bottom: 40px;
	}

	.input-container {
		position: relative;
	}

	.name-input {
		width: 100%;
		padding: 18px 24px;
		font-size: 1.2rem;
		border: 2px solid transparent;
		border-radius: 16px;
		background: rgba(12, 17, 21, 0.8);
		color: #e5e7eb;
		outline: none;
		transition: all 0.3s ease;
		box-sizing: border-box;
	}

	.name-input::placeholder {
		color: #6b7280;
	}

	.name-input:focus {
		border-color: #40aa34;
		background: rgba(12, 17, 21, 0.9);
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(64, 170, 52, 0.3);
	}

	.input-glow {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 16px;
		background: linear-gradient(135deg, #40aa34, #286e2d);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
		z-index: -1;
	}

	.name-input:focus + .input-glow {
		opacity: 0.1;
	}

	.result-section {
		min-height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.result-card {
		background: linear-gradient(135deg, rgba(12, 17, 21, 0.9) 0%, rgba(11, 19, 22, 0.8) 100%);
		border-radius: 20px;
		padding: 30px;
		text-align: center;
		border: 1px solid rgba(40, 110, 45, 0.3);
		width: 100%;
		animation: slideUp 0.5s ease;
	}

	.result-header h2 {
		color: #e5e7eb;
		margin: 0 0 20px 0;
		font-size: 1.3rem;
		font-weight: 600;
	}

	.age-display {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 10px;
		margin-bottom: 15px;
	}

	.age-number {
		font-size: 4rem;
		font-weight: 800;
		background: linear-gradient(135deg, #40aa34, #286e2d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.age-label {
		font-size: 1.5rem;
		color: #9ca3af;
		font-weight: 500;
	}

	.count-info {
		color: #9ca3af;
		font-size: 0.95rem;
	}

	.loading {
		text-align: center;
		color: #9ca3af;
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 3px solid rgba(40, 110, 45, 0.2);
		border-top: 3px solid #40aa34;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 0 auto 15px;
	}

	.empty-state {
		text-align: center;
		color: #9ca3af;
	}

	.empty-state h3 {
		margin: 0 0 10px 0;
		color: #e5e7eb;
	}

	.empty-state p {
		margin: 0;
		opacity: 0.7;
	}

	footer {
		text-align: center;
		margin-top: 40px;
		padding-top: 20px;
		border-top: 1px solid rgba(40, 110, 45, 0.3);
	}

	footer p {
		color: #9ca3af;
		font-size: 0.9rem;
		margin: 0;
	}

	footer a {
		color: #40aa34;
		text-decoration: none;
		font-weight: 500;
	}

	footer a:hover {
		text-decoration: underline;
		color: #286e2d;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.container {
			margin: 10px;
			padding: 30px 20px;
		}

		h1 {
			font-size: 2rem;
		}

		.age-number {
			font-size: 3rem;
		}

		.name-input {
			font-size: 1.1rem;
			padding: 16px 20px;
		}
	}
</style>
