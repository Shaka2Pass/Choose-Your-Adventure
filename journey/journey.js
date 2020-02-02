import loadProfile from '../common/load-profile.js';
import { getUser, saveUserInfo } from '../data/api.js';
import journeys from '../data/journey-data.js';
import createChoice from './create-choice.js';
import findById from '../common/findByID.js';
import scoreJourney from './scoreJourney.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);

const journeyId = searchParams.get ('id');

const journey = findById(journeys, journeyId);

if (!journey) {
    window.location = '../map';

}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = journey.title;
image.src = '../assets/journeys/' + journey.image;
description.textContent = journey.description;

for (let index = 0; index < journey.choices.length; index++) 

{const choice = journey.choices[index];

    const choiceDOM = createChoice(choice);

    choices.appendChild(choiceDOM);
}

choiceForm.addEventListner('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);

    const choiceId = formData.get('choice');

    const choice = findById(journey.choices, choiceId);

    const user = getUser();

    scoreJourney(choice, journey.id, user);

    saveUserInfo(user);

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();

});




