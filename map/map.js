import { getUser } from '../data/api.js';
import journeys from '../data/journey-data.js';
import loadProfile from '../common/load-profile.js';
import createJourneyLink from './create-journey-link.js';
import createCompletedJourney from './createCompletedJourney.js';
import hasCompletedAllJourneys from './complete-quests.js';
import isDead from '../common/is-dead.js';

loadProfile(); 

const user = getUser();

if (isDead(user) || hasCompletedAllJourneys(journeys, user)) {
    window.location = '../results';
}

const nav = document.getElementById('journeys');

for (let i = 0; i < journeys.length; i++){
    const journey = journeys[i];

    let journeyDisplay = null;

    if (user.completed[journey.id]) {
        journeyDisplay = createCompletedJourney(journey);
    }
    
    else {
        journeyDisplay = createJourneyLink(journey);
    }
    nav.appendChild(journeyDisplay);



    






}







