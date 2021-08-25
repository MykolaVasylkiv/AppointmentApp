import React, {useReducer, createContext} from 'react';
import dayjs from 'dayjs';

import {generateDates, createInitSlots} from '../helpers';

export const SlotContext = createContext();

const initState = {
  slots: createInitSlots(generateDates(dayjs(), dayjs().add(2, 'day'))),
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'EDIT_SLOT':
      return {
        slot: [...state.slots, action.payload],
      };
    case 'REMOVE_SLOT':
      return {
        slot: state.slots.filter(todo => todo.id !== action.payload),
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
