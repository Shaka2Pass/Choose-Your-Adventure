import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreStamina from './scoreStamina.js';
import { aliveFeedMessages, deadFeedMessages, staminaMessages } from './resultmessages.js';
import scoreFeed from './scoreFeed.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const staminaResult = scoreStamina(user.stamina);

const feedResult = scoreFeed(user.feed);

const staminaMessage = staminaMessages[staminaResult];

let feedMessages = null;
if (feedResult === 'dead') {
    feedMessages = deadFeedMessages;
}

else {
    feedMessages = aliveFeedMessages;
}

const feedMessage = feedMessages[feedResult];

let story = 'After your escape, ';
story += user.name + ' the ' + user.animal + ', ';

story += staminaMessage + ' and ' + feedMessage + '.';

storyDisplay.textContent = story; 


