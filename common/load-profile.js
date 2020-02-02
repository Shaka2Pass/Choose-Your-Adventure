import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {

  //pull elements from the DOM form. User name, their animal avitar, and finally there current stamina and feed state that will be generated dynamically based on current progress. 
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const stamina = document.getElementById('stamina');
    const feed = document.getElementById('feed');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/animals/' + user.animal + '.png';
    feed.textContent = user.feed;

    if (isDead(user)) {
        stamina.textContent = 'You\'re Dinner!'; 

    }

    else {

        stamina.textContent = user.stamina;

    }
}

export default loadProfile;




