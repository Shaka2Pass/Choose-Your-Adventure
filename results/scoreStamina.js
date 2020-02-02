function scoreStamina(stamina) {
    if (stamina <= 0) {
        return 'dead';
    }
    if (stamina < 30) {
        return 'weak';
    }
    return 'strong';
}

export default scoreStamina;