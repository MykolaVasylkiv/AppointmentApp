import dayjs from 'dayjs';

const generateDates = (startDate, endDate) => {
  const dateArray = [];
  let currentDate = dayjs(startDate);
  const stopDate = dayjs(endDate);

  while (currentDate <= stopDate) {
    dateArray.push(dayjs(currentDate).format('YYYY-MM-DD'));
    currentDate = dayjs(currentDate).add(1, 'day');
  }
  return dateArray;
};

export default generateDates;
