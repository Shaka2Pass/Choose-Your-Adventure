import loadProfile from '../common/load-profile.js';
import { getUser, saveUserInfo } from '../data/api.js';
import journeys from '../data/journey-data.js';
import createChoice from './create-choice.js';
import findById from '../common/findByID.js';
import scoreJourney from './scoreJourney.js';

loadProfile();
//find search parameters from URL.
const searchParams = new URLSearchParams(window.location.search);

const journeyId = searchParams.get('id');

const journey = findById(journeys, journeyId);

/*
This function is working. and subsequently kicks the user. Because my quests aren't being pulled from the URL. 

if (!journey) {
    //window.location = '../map';
} 
*/
const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

//the following code is supposed to take the quest that is retreived by findById...when it works. 
title.textContent = journey.title;
image.src = '../assets/journeys/' + journey.image;
description.textContent = journey.description;

for (let i = 0; i < journeys.choices.length; i++)
{
    const choice = journeys.choices[i];

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




