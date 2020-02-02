function hasCompletedAllJourneys(journeys, user) {
    for (let i = 0; i < journeys.length; i++) {
        const quest = journeys[i];
        // if any of the quests is incomplete
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    return true;

}

export default hasCompletedAllJourneys;


    