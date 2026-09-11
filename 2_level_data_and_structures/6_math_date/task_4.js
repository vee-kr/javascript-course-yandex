function isSameDay(dateStr1, dateStr2) {
    const Date1 = new Date(dateStr1);
    const Date2 = new Date(dateStr2);
    return (Date1.getTime() === Date2.getTime())

}