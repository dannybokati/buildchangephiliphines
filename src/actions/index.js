import _ from 'lodash';
import { NetInfo, AsyncStorage } from 'react-native';

export const tappedOnViewSchools = (token) => {
  return (dispatch) => {
    fetch('http://bccms.naxa.com.np/core/api/project/1/', {
      method: 'GET',
      headers: {
        Authorization: 'token '+token
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      dispatch({ type: 'tapped_on_view_schools', payload: responseJson });
    })
   .catch((error) => {
      console.error(error);
    });
  };
};

export const openedGuidelinesCategoryScene = (token) => {
  return (dispatch) => {
    fetch('http://bccms.naxa.com.np/core/api/houses-and-general-construction/', {
      method: 'GET',
      headers: {
        Authorization: 'token '+token
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      dispatch({ type: 'opened_guidelines_category_scene', payload: responseJson });
    })
   .catch((error) => {
      console.error(error);
    });
  };
};

export const openedConstructionMaterialsScene = (token) => {
  return (dispatch) => {
    fetch('http://bccms.naxa.com.np/core/api/category-list/?project_id=1', {
      method: 'GET',
      headers: {
        Authorization: 'token '+token
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      dispatch({ type: 'opened_construction_materials_scene', payload: responseJson });
    })
   .catch((error) => {
      console.error(error);
    });
  };
};

export const openedAddressScene = (token) => {
  return (dispatch) => {
    fetch('http://bccms.naxa.com.np/core/api/standard-school-design/', {
      method: 'GET',
      headers: {
        Authorization: 'token '+token
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      dispatch({ type: 'opened_address_scene', payload: responseJson });
    })
   .catch((error) => {
      console.error(error);
    });
  };
};

export const userSearched = (text) => {
  return {
    type: 'user_searched',
    payload: text
  };
};

export const intelliSearch = (text) => {
  return {
    type: 'intelli_search',
    payload: text
  };
};

export const checkOnline = () => {
  return (dispatch) => {
    NetInfo.isConnected.fetch()
    .then(isConnected => {
      if (isConnected) {
        dispatch({ type: 'check_online', payload: isConnected });
      }
      dispatch({ type: 'check_online', payload: isConnected });
    });
  };
};





export const requestPerson = (data) => {
  console.log('request_person_bhirta');
  console.log(data);

  return (dispatch, getState) => {
    AsyncStorage.getItem('token').then(token => {
      const { isConnected } = getState();
      console.log('isConnectedko_value');
      console.log(isConnected);
      //
      const url = 'http://bccms.naxa.com.np/core/api/checklist/' + data.checklistItemData.id + '/';
      const formdata = new FormData();
      //
      formdata.append('status', data.checklistItemValue);
      // formdata.append('site', data.checklistItemData.site);
      // formdata.append('step', data.checklistItemData.step);
      // formdata.append('substep', data.checklistItemData.substep);


      const req = {
        //
        method: 'PUT',
        headers: {
          Authorization: 'token ' + token,
          'Content-Type': 'multipart/form-data'
        },
        body: formdata
      };
      if (isConnected.isConnected) {
        console.log({ url, req });
        fetch(url, req)
          .then((res) => {
            console.log(res);
            dispatch({ type: 'REMOVE_FROM_ACTION_QUEUE', payload: { url, status: data.checklistItemValue, site: data.checklistItemData.site, step: data.checklistItemData.step, substep: data.checklistItemData.substep, id: data.checklistItemData.id, method: 'PUT' } });
          })
          .catch((error) => console.log(error));
      } else {
        dispatch({ type: 'ADD_TO_ACTION_QUEUE', payload: { url, status: data.checklistItemValue, site: data.checklistItemData.site, step: data.checklistItemData.step, substep: data.checklistItemData.substep, id: data.checklistItemData.id, method: 'PUT' } });
      }
  });
  };
};



export const requestPersonByUrl = (eachElement) => {
  return (dispatch) => {
    AsyncStorage.getItem('token').then(token => {
      const formdata = new FormData();
      formdata.append('status', eachElement.status);
      // formdata.append('site', eachElement.site);
      // formdata.append('step', eachElement.step);
      // formdata.append('substep', eachElement.substep);

      const req = {
        method: eachElement.method,
        headers: {
          Authorization: 'token ' + token,
          'Content-Type': 'multipart/form-data'
        },
        body: formdata
      };
      fetch(eachElement.url, req)
        .then((res) => {
          console.log(res);
          dispatch({ type: 'REMOVE_FROM_ACTION_QUEUE', payload: { url: eachElement.url, status: eachElement.status, site: eachElement.site, step: eachElement.step, substep: eachElement.substep, id: eachElement.id, method: eachElement.method } });
        })
        .catch((error) => console.log(error));
    });
  };
};

export const connectionState = (status) => {
  console.log('connectionStateko_bhitra');
  console.log('statusko_value');
  console.log(status);
  console.log('returned_action_ko_value');
  console.log({ type: 'CHANGE_CONNECTION_STATUS', payload: status.status });
  return { type: 'CHANGE_CONNECTION_STATUS', payload: status.status };
};

export const storeCurrentSelectedSchool = (status) => {
  console.log('storeCurrentSelectedSchool_ko_bhitra', status);
  return { type: 'REMEMBER_SELECTED_SCHOOL', payload: status.schoolId };
};

export const storeUserGroup = (status) => {
  console.log('storeUserGroup_ko_bhitra');
  console.log('statusko_value');
  console.log(status);
  return { type: 'REMEMBER_USER_GROUP', payload: status };
};

export const storeAddress = (status) => {
  console.log('store_address_ko_bhitra', status);
  return { type: 'REMEMBER_SELECTED_ADDRESS', payload: status };
};

export const setDownloadInfo = (status) => {
  console.log('setDownloadInfo_bhitra', status);
  if (status.hasOwnProperty('filePaths')) {
    return { type: 'REMEMBER_FILE_PATHS', payload: status }
  }
  return { type: 'REMEMBER_DOWNLOAD_STATUS', payload: status };
};

export const saveToDraftsCollection = (draft) => {
  console.log('saveToDraftsCollection', draft);
  return { type: 'SAVE_DRAFT_TO_DRAFTS_COLLECTION', payload: draft };
};

export const deleteFromDraftsCollection = (draft) => {
  console.log('deleteFromDraftsCollection', draft);
  return { type: 'DELETE_FROM_DRAFTS_COLLECTION', payload: draft };
};
