import moment from 'moment';

export function formatDateTime(date, format = 'MM/DD/YYYY') {
  return moment(date).format(format);
}
