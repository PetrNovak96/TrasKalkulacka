export type ApiResponseError = 'veryAccurateError';

export interface ApiResponse {
  error: ApiResponseError;
  data: string;
}
export interface PetrResponse {
  interestRate: number;
}
