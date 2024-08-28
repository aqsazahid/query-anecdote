import React, { createContext, useReducer, useContext } from 'react';

// Define the initial state and reducer
const initialState = '';

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.payload;
    case 'CLEAR_NOTIFICATION':
      return '';
    default:
      return state;
  }
};

// Create the Notification Context
const NotificationContext = createContext();

// Provide the Notification Context
export const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationContext.Provider value={{ notification, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use notification context
export const useNotification = () => useContext(NotificationContext);
