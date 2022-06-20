import PropTypes from "prop-types";

/**
 * From https://github.com/jaredpalmer/formik/issues/1424#issuecomment-563923529
 *
 * Formik doesn't expose its injected props prop-types, so this file declares
 * them manually so we can re-use them easily.
 *
 * From https://jaredpalmer.com/formik/docs/api/formik#formik-render-methods-and-props
 */
const formikType = PropTypes.shape({
  dirty: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  isValidating: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  submitCount: PropTypes.number.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  setTouched: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  status: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  touched: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  values: PropTypes.object.isRequired,
  validateForm: PropTypes.func.isRequired,
  validateField: PropTypes.func.isRequired,
});

export default formikType;
