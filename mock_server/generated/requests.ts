import {
  ApiResponseError,
  ApiResponse,
  PetrResponse
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
commonResponses['PetrResponse'] = () => {
  return {
    result: 'Not implemented PetrResponse'
  };
};

export interface IResponsesObject {
  getDemoDemoEndPoint?: (req, res) => ApiResponse;
  getDemoPetrEndPoint?: (req, res) => PetrResponse;
}
