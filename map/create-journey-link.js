function createJourneyLink(journey) {
    const link = document.createElement('a');
    link.classList.add('journey');

    link.href = '../journey/?id=' + journey.id;
//this references the top: and left: styles set in journey-data.js
    link.style.top = journey.map.top; 
    link.style.left = journey.map.left;
    link.textContent = journey.title;

    return link;

}

export default createJourneyLink;




