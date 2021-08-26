import dayjs from 'dayjs';

const createInitSlots = dates => {
  const defaultSlot = {
    duration: 2,
    slotId: 0,
    time: '',
    userInfo: {
      userName: '',
      mobilePhone: 0,
      email: '',
    },
  };

  return dates.map((date, id) => {
    let hours = 0;

    return {
      id: id,
      title: date,
      data: Array.from({length: 4}, (_, index) => {
        hours += 2;
        return {
          ...defaultSlot,
          time: dayjs(date).add(hours, 'hours'),
          slotId: index,
        };
      }),
    };
  }, {});
};

export default createInitSlots;
