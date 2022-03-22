function distanceFromHqInBlocks(street) {
    if (street >= 42) {
        return street - 42
    }
    else {
        return 42 - street
    }
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start >= end) {
        return (start - end) * 264
    }
    else {
        return (end - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    const dist = distanceTravelledInFeet(start, destination)
    if (dist < 400) {
        return 0
    }
    else if (dist > 400 && dist < 2000) {
        return (dist - 400) * 0.02
    }
    else if (dist > 2000 && dist < 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}