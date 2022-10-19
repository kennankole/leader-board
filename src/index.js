import _ from 'lodash';
import './style.css';
import dataList from './modules/home.js'


const data = dataList();
let divElement = document.createElement("div");
let refreshBtn = document.createElement('div');
const scores = document.getElementById('scores-container');
const olElements = document.createElement('ul');


// divElement.classList.add('elem-container');
// refreshBtn = `
//     <div class="refresh-btn">
//         <h3>Recent scores</h3>
//         <button type="submit" id="reload-btn">Refresh</button>
//     </div>
// `;


// olElements.classList.add('ul-elements')

// data.forEach((item) => {
//     olElements.innerHTML += `<li class="players-li">Name ${item}</li>`;
// });
// divElement.appendChild(olElements);

// scores.appendChild(divElement);


const freshBtn = document.querySelector('.scores-btn');
const scoreList = document.getElementById('score-list-elem');
const apiKey = 'grKq5iRZxSvrwH0KgZtW';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;


// GET Request
freshBtn.addEventListener('click', () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        scoreList.innerHTML = '';
        return data.result.forEach((item) => {
           
            scoreList.innerHTML += `
            <li>${item.user}:${item.score}</li>
            `;
        })
    })
})

// POST Request 
const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const yourName = document.getElementById('name');
    const score = document.getElementById('score');
    const formData = {
        user: yourName.value,
        score: score.value,
    }
    console.log(yourName.value);
    console.log(score.value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
    });
    yourName.value = '';
    score.value = '';
})
