import _ from 'lodash';
import './style.css';
import dataList from './modules/home.js'


const data = dataList();
let divElement = document.createElement("div");
let refreshBtn = document.createElement('div');
const scores = document.getElementById('scores-container');
const olElements = document.createElement('ul');


divElement.classList.add('elem-container');
refreshBtn = `
    <div class="refresh-btn">
        <h3>Recent scores</h3>
        <button type="submit" id="reload-btn">Refresh</button>
    </div>
`;


olElements.classList.add('ul-elements')

data.forEach((item) => {
    olElements.innerHTML += `<li class="players-li">Name ${item}</li>`;
});
divElement.appendChild(olElements);

scores.appendChild(divElement);
