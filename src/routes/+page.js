export async function load({ url, fetch }) {
	const name = url.searchParams.get('name');

	if (!name || name.trim().length === 0) {
		return {
			name: '',
			result: null
		};
	}

	try {
		const response = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name.trim())}`);
		const result = await response.json();

		return {
			name: name.trim(),
			result: result
		};
	} catch (error) {
		console.warn('Erro ao consultar API Agify:', error);
		return {
			name: name.trim(),
			result: null
		};
	}
}
