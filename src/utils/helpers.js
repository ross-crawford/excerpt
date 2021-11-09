import dateFormat from 'dateformat';

export const dateFormatter = (date) => {
  const newDate = new Date(date);
  return dateFormat(newDate, 'mmm d, yyyy');
};
