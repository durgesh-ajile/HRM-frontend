
export function ISTdateFormater(UnformatadDate) {

    const dateObject = new Date(UnformatadDate);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear() % 100;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedYear = year < 10 ? `0${year}` : year;

    return (`${formattedDay}/${formattedMonth}/${formattedYear}`)
}


export function UTCDateFormater(UnformatadDate) {

    const inputDate = new Date(UnformatadDate);
    const day = String(inputDate.getUTCDate()).padStart(2, '0');
    const month = String(inputDate.getUTCMonth() + 1).padStart(2, '0');
    const year = inputDate.getUTCFullYear();
    
    return (`${day}/${month}/${year}`)
}