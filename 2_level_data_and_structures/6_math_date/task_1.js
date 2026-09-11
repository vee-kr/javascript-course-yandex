function isValidDate(dateString) {
    let newDate = new Date(dateString)
    return !(isNaN(newDate.getTime()))
}