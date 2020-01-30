function makePlayer(formData) {
    const user = {
        name: formData.get('name'),
        animal: formData.get('animal'),
        stamina: 30,
        feed: 0,
        completed: {}
    };

    return user;
}

export const newMakePlayer = (formData) => ({
    name: formData.get('name'),
    animal: formData.get('animal'),
    stamina: 30,
    feed: 0,
    completed: {}
});

export default makePlayer; 