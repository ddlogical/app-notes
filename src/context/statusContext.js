import { useReducer, createContext } from 'react';

export const StatusContext = createContext({
  add: false,
  edit: false,
  delete: false,
  changeStatus: () => {},
});

function reducer(state, action) {
  switch(action.type) {
    case 'add':
      return {
        ...state,
        add: !state.add
      };
    case 'edit':
      return {
        ...state,
        edit: !state.edit
      };
    case 'delete':
      return {
        ...state,
        delete: !state.delete
      };
      default:
        throw Error('Unknown action.');
  }
}

export function StatusContextProvider(props) {
  const [status, dispatch] = useReducer(reducer, {  
    add: false,
    edit: false,
    delete: false});

  function changeStatus(actionType) {
    dispatch({type: actionType})
    // setAdd(prevTheme => prevTheme === true ? false : true);
  }

  const contextValue = {
    ...status,
    changeStatus,
  };

  return (
    <StatusContext.Provider value={contextValue}>
      {props.children}
    </StatusContext.Provider>
  );
}