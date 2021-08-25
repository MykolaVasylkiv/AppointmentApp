import dayjs from 'dayjs';

const createInitSlots = dates => {
  const defaultSlot = {
    duration: 2,
    slotId: null,
    time: dayjs(),
    available: true,
    userInfo: {
      userName: 'Empty',
      mobilePhone: null,
      email: '',
    },
  };

  return dates.map(date => {
    return {
      title: date,
      data: Array.from({length: 4}, (_, index) => ({
        ...defaultSlot,
        slotId: index,
      })),
    };
  }, {});
};

export default createInitSlots;
