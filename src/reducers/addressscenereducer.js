const INITIAL_STATE = { isLoading: true, data: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'opened_address_scene':
      console.log('reducer_bhitra', { ...state, data: action.payload, isLoading: false });
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
