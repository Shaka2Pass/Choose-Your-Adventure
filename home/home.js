import { saveUserInfo } from '../data/api.js';
import makePlayer from '../home/makePlayer.js';

const userSignUp = 
document.getElementById('user-sign-in');
userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makePlayer(formData);
    saveUserInfo(user);
    window.location = 'map';
    
});

//the Funciton userSignUp will pull the form information from the DOM using the 'getElementByID'method on the document. The 'user-sign-in-' is the value of the 'id' in the form tag. 

//"The addEventListener() is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired. Any number of event handlers can be added to a single element without overwriting existing event handlers." 

//in this instance we've added an event listener to the userSignUp functino that pulls the dom. and we call a function which 1. prevents the page from reloading...
//2. makes a new formData object which takes the form data from the DOM via the userSignUp function.  
//3. a new 'user' is created using the makePlayer function(and the datat form the form i.e. 'formData')
//4. the new 'user' is then saved in local storage.
//5. the fifth operation in the function then relocates us to the 'map' page. 