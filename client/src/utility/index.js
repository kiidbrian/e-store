export const isEmpty = (obj) => {
    if (obj == null) return true;
    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;
    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

export const generateInitials = businessName => {
    return businessName && businessName.split(" ")
        .map(x => x[0])
        .slice(0, 2)
        .join("");
}

export const prettyPrintMoney = money => {
    const num = money.toFixed(2);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const itemLink = (businessId,itemId) => {
    return `/${businessId}/item/${itemId}`;
}