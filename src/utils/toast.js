const defaultOptions = {
  position: 'top',
  variant: 'left-accent',
  duration: 5000,
  isClosable: true,
};

export const successToast = {
  ...defaultOptions,
  status: 'success',
};
export const errorToast = {
  ...defaultOptions,
  status: 'error',
};
export const warningToast = {
  ...defaultOptions,
  status: 'warning',
};
export const infoToast = {
  ...defaultOptions,
  status: 'info',
};
