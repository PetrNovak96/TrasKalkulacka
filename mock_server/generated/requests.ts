import {
  ApiResponseError,
  ApiResponse
} from '../../src/app/services/api-model';
export let commonResponses = {};

commonResponses['ApiResponseError'] = () => {
  return {
    result: 'Not implemented ApiResponseError'
  };
};
commonResponses['ApiResponse'] = () => {
  return {
    result: 'Not implemented ApiResponse'
  };
};

export interface IResponsesObject {
  getDemoDemoEndPoint?: (req, res) => ApiResponse;
}
