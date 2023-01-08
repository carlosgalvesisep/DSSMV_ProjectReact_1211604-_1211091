
import React, { useReducer } from 'react';
import PropTypes from "prop-types";
import { Provider } from './AppContext';
import reducer from './Reducer';

const initialState = {
  popularMovies: {
    loading: true,
    error: null,
    data: [],
  },
  upcomingMovies: {
    loading: true,
    error: null,
    data: [],
  },
  popularSeries: {
    loading: true,
    error: null,
    data: [],
  },
  topRatedSeries: {
    loading: true,
    error: null,
    data: [],
  },
  details: {
    loading: true,
    error: null,
    data: {},
  }


};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{
      state,
      dispatch,
    }}>
      {props.children}
    </Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node,
};


export default AppProvider;