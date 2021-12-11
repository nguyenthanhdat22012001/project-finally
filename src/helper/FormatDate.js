import { format ,formatDistance,formatDistanceToNow} from 'date-fns'
import viLocale from "date-fns/locale/vi";


export function formatdateYMD(dateObj = new Date()) {
    const formatDate = format(dateObj, 'yyyy-MM-dd',{timeZone: "UTC"})
    return formatDate;
}

export function formatdateDMY(dateString) {
    const dateObj = new Date(dateString);
    const formatDate = format(dateObj, 'dd/MM/yyyy',{timeZone: "UTC"})
    return formatDate;
}

export function distanceToNow(dateString) {
    const distanceToNow = formatDistanceToNow(
        new Date(dateString),
        { locale: viLocale,addSuffix: true}
    );
    return distanceToNow;
}