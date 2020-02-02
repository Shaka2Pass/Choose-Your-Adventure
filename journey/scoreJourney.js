function scoreJourney(choice, questId, user) 
{
    user.stamina += choice.stamina;

    user.feed += choice.feed;

    user.completed[questId] = true;
}

export default scoreJourney;