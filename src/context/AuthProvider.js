import React, {useReducer} from 'react';
import PropTypes from "prop-types";
import { Provider } from './AuthContext';
import reducer from './Reducer';


const initialState = {
  requestToken: {
    loading: true,
    error: null,
    data: [],
  },
    guestSession: {
      loading: true,
      error: null,
      data: [],
    },
  };

const AuthProvider = (props) => {
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
  AuthProvider.propTypes = {
    children: PropTypes.node,
  };
  
  export default AuthProvider;