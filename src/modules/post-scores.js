const postScores = async (url, formData) => {

	try {
		const response = await fetch(url, {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData), 
		});
		const data = await response.json();
		console.log("Success", data);
	}
	catch(error) {
		console.log("Error", error);
	}
}

module.exports = postScores;