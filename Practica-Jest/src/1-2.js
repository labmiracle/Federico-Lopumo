function isLeapYear(year) {
    if (typeof year !== 'number') {
        throw new Error('El argumento debe ser un número');
    }

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

module.exports = isLeapYear;
