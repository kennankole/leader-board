
const getScores = async (url, scoreList) => {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		}
	});
	const dataForm = await response.json();
	scoreList.innerHTML = ''
	return dataForm.result.forEach((item) => {
		scoreList.innerHTML += `
		<li class="players-li">${item.user}:${item.score}</li>
		`;
	})
    
}

module.exports = getScores;