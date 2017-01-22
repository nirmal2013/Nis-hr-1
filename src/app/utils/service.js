import { SERVICE_CONSTANTS } from 'app/utils/constants';

const service = {
  get(what) {
    let data = __.prepareRequest(what);
    return $.ajax({
      method: 'GET',
      url: data.url,
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json',
      fail: (xhr, status, error) => {
        console.log('Error in Ajax', xhr, status, error);
      }
    });
  }
};

const __ = {};
__.prepareRequest = (what) => {
  switch (what) {
    case SERVICE_CONSTANTS.CURRENT_SERVER_TIMESTAMP:
      let url = window.location + 'getTime';
      return {
        url
      }
      break;
    default:
      return {};
  }
};

export default service;
