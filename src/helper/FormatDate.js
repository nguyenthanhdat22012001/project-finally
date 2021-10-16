import { format } from 'date-fns'

export function formatdateYMD(dateObj = new Date()) {
    const dtDateOnly =new Date(dateObj.valueOf() + dateObj.getTimezoneOffset() * 60 * 1000);
    const formatDate = format(dtDateOnly, 'yyyy-MM-dd',{timeZone: "UTC"})
    return formatDate;
}