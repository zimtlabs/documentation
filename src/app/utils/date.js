import moment from 'moment';

export const isValidDate = date => date && moment(date).isValid();

export const getTimestamp = () => moment().unix();

export const getDate = (date = new Date(), timezone = false) => {
    if (!isNaN(date) && String(date).length < 13) date *= 1000;

    date = moment(date);

    const d = date.format('DD MMM YYYY');
    const h = date.format('HH:mm');
    const tz = timezone ? ` ${date.format('Z')}` : '';

    return `${d} @ ${h}${tz}`;
};

export const getDateUTC = (time = new Date()) => {
    if (!isNaN(time) && String(time).length < 13) time *= 1000;
    time = moment(time).utc();

    const d = time.format('DD MMM YYYY');
    const t = time.format('HH:mm');

    return `${d} at ${t} (UTC)`;
};

export const timeAgo = (time = new Date()) => {
    if (!isNaN(time) && String(time).length < 13) time *= 1000;
    time = moment(time);

    return time.fromNow();
};

export const timeAgoWithUTC = (time = new Date()) => {
    if (!isNaN(time) && String(time).length < 13) time *= 1000;
    time = moment(time);
    const utc = moment(time).utc();

    const d = utc.format('DD MMM YYYY');
    const t = utc.format('HH:mm');

    return `${time.fromNow()} (${d} at ${t} UTC)`;
};
export const formatDate = (date = new Date(), format) => {
    if (!isNaN(date) && String(date).length < 13) date *= 1000;

    date = moment(date);

    return date.format(format || 'DD MMMM YYYY');
};
