import Service from 'app/utils/service';
import { SERVICE_CONSTANTS } from 'app/utils/constants';

export const getServerCurrentTimeStamp = () => {
  return Service.get(SERVICE_CONSTANTS.CURRENT_SERVER_TIMESTAMP);
};

export default {
  getServerCurrentTimeStamp
};
