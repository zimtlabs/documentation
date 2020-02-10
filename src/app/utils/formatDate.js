import moment from 'moment';

export const formatDate = date => {
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

export const formatTableDate = time => {
    if (String(time).length < 13) time *= 1000;

    return moment(time).format('DD MMM YYYY, HH:mm')
};
