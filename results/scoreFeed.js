function scoreFeed(feed) {
    if (feed === 0) {
        return 'low';
    }
    else if (feed < 30) {
        return 'adequate';
    }
    return 'full';
}

export default scoreFeed;