import moment from 'moment';

export const formatDate = (date : Date) => {
    return moment(date).format('MM/DD/YYYY');
};