function formatDateRu (dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const indexMonth = date.getMonth();
    const month = months[indexMonth];
    const year = date.getFullYear();

    return ( `${day} ${month} ${year} года`)

}