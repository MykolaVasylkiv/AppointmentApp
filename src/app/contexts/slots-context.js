import React, {useReducer, createContext} from 'react';

export const SlotContext = createContext();

const initState = {
  slots: [
    {
      id: 1,
      userName: 'Mykola',
      email: 'mykola@sdf.sd',
      phoneNumber: '0502444210',
    },
    {
      id: 2,
      userName: 'Taras',
      email: 'taras@sdf.sd',
      phoneNumber: '0502444210',
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SLOT':
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
