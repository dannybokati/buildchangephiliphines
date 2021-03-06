const initialState = {
  drafts: [],
};

export default (state = initialState, action) => {
  console.log('SAVE_DRAFT_TO_DRAFTS_COLLECTION', action);

  switch (action.type) {

    case 'SAVE_DRAFT_TO_DRAFTS_COLLECTION':
      // return Object.assign({}, state, {
      //   drafts: state.drafts.filter((draft) => draft.subStepId !== action.payload.subStepId).concat([action.payload])
      // });
      return Object.assign({}, state, {
        drafts: state.drafts.filter((draft) => {
          if (draft.hasOwnProperty('subStepId')) {
              return draft.subStepId !== action.payload.subStepId;
          } else {
            return draft.siteId !== action.payload.siteId;
          }
        }).concat([action.payload])
      });

    case 'DELETE_FROM_DRAFTS_COLLECTION':
    if (action.payload.hasOwnProperty('siteId')) {
      return Object.assign({}, state, {
        drafts: state.drafts.filter((draft) => {
          if (draft.hasOwnProperty('stepId') && draft.hasOwnProperty('subStepId')) {
              return true;
          } else {
            return draft.siteId !== action.payload.siteId;
          }
        })
      });
    } else {
      return Object.assign({}, state, {
        drafts: state.drafts.filter((draft) => draft.subStepId !== action.payload.subStepId)
      });
    }


    default:
      return state;
  }
};
