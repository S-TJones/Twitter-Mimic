import { Post } from '@/entities';
import { AxiosResponse } from 'axios';
import { BaseService } from './_base';
import env from '@/config/env';

type ServiceResult = {
  success: boolean;
  // tslint:disable-next-line: no-any
  data?: any;
};

enum StatusCode {
  OK = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

const url = env.API_URL;
const {API_URL} = env; // Nathan says this is Object destructoring
// This ^ is known as property destructoring

class TransactionService extends BaseService {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super({
      // baseURL: url
      baseURL: `${API_URL}` // Nathan says this is String Interpolation
    });
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public async postData(payload: Post): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .post('/dashboard', payload, options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {
        return result;
      });
  }
  
  public async putData(): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .put('/dashboard', options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;
        // console.log("RESULT: " + JSON.stringify(data));

        return result;
      })
      .catch((err) => {
        return result;
      });
  }

  public async getData(): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .get('/dashboard', options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {
        return result;
      });
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

}

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

const service = new TransactionService();

export {
  service as default,
  service as TransactionService,
};
