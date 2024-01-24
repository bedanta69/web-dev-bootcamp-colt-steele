function rollDie(numsides) {
    if (numsides === undefined) {
        numsides = 6;
    }
    return Math.floor(Math.random() * numsides) + 1;
}

// New way of writing the exact programme
function rollDie(numsides = 6) {
    return Math.floor(Math.random() * numsides) + 1;
}