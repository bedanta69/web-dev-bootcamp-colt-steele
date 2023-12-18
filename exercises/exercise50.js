function allEvens(arr) {
    if (arr.every(n => n % 2 == 0)) {
        return true;
    } else {
        return false;
    }
};