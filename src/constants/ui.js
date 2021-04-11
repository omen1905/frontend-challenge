
export const REQUEST_STATUS = {
  LOADING: {
    loading: true,
    success: false,
    failure: false
  },
  SUCCESS: {
    loading: false,
    success: true,
    failure: false
  },
  FAILURE: {
    loading: false,
    success: false,
    failure: true
  },
  DEFAULT: {
    loading: false,
    success: false,
    failure: false
  }
};