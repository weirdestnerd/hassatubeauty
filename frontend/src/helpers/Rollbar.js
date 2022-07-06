// eslint-disable-next-line no-undef
const RollbarError = (error) => window.onerror(error, window.location.href);

export default RollbarError;
