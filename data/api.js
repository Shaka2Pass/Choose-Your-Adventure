//This function will save a users information and place it into local storage. Before it can go into local storage the user info must be serialized using JSON.stringify. Then the method 'setItem' will place an into local storage. 
export function saveUserInfo(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

//this function retrieve a usters information from local storage using the method 'getItem' and the user info. If the users information is not fount (!json) the function will return null. If a user information is available the information must be deserialized via the JSON.parse method. 
export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}
