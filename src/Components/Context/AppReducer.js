export default (state, action) => {
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        };
      case 'ADD_TRANSACTION': // Corrected the action type here
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        };
  
      default:
        return state;
    }
  };
  