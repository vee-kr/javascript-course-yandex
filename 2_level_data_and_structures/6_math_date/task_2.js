function daysBetween(dateStr1, dateStr2) {
    const millisec = 86400000;
    const today = new Date(dateStr1);
    const newDay = new Date(dateStr2);
    const difference = Math.abs(newDay.getTime() - today.getTime())
    return Math.floor(difference / millisec)


}