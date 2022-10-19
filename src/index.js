import _ from 'lodash';
import './style.css';
import postScores from './modules/post-scores.js';
import getScores from './modules/get-scores';


const freshBtn = document.querySelector('.scores-btn');
const scoreList = document.getElementById('score-list-elem');
const apiKey = 'grKq5iRZxSvrwH0KgZtW';
export const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;


// GET Request
freshBtn.addEventListener('click', () => {
	getScores(url, scoreList);
	// scoreList.innerHTML = ''
	// return dataForm.result.forEach((item) => {
	// 	scoreList.innerHTML += `
	// 	<li>${item.user}:${item.score}</li>
	// 	`;
	// });
})

// POST Request 
const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
	const yourName = document.getElementById('name');
	const score = document.getElementById('score');
	const formData = {
		user: yourName.value,
		score: score.value
	}
	e.preventDefault();
	postScores(url, formData);
	yourName.value = '';
	score.value = '';
})



