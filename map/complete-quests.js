function hasCompletedAllJourneys(journeys, user) {
    for (let i = 0; i < journeys.length; i++) {
        const quest = journeys[i];
       
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    
    return true;

}

export default hasCompletedAllJourneys;


    