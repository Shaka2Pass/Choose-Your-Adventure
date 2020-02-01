function createCompletedJourney(journey) {
    const span = document.createElement ('span');
    span.classList.add('journey');
    span.classList.add('completed');

    span.style.to = journey.map.top;
    span.style.left = journey.map.left;
    
    span.textContent = journey.title; 

    return span;

}

export default createCompletedJourney;