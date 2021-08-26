import React, {useReducer, createContext} from 'react';

export const SlotContext = createContext();

const initState = async () => ({
  slots: [],
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INIT_DATA':
      return {
        slots: action.payload,
      };
    case 'EDIT_SLOT':
      const {payload} = action;
      const getUpdatedSlots = () => {
        return state.slots.map(day => {
          if (day.id === payload.dayId) {
            return {
              ...day,
              data: day.data.map(slot => {
                if (slot.slotId === payload.slotId) {
                  return {
                    ...slot,
                    userInfo: {...slot.userInfo, ...payload.data},
                  };
                }
                return slot;
              }),
            };
          }
          return day;
        });
      };

      return {
        slots: getUpdatedSlots(),
      };
    default:
      throw new Error();
  }
};

export const SlotContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <SlotContext.Provider value={[state, dispatch]}>
      {props.children}
    </SlotContext.Provider>
  );
};
