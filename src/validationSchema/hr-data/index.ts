import * as yup from 'yup';

export const hrDataValidationSchema = yup.object().shape({
  performance_review: yup.string().required(),
  disciplinary_action: yup.string().nullable(),
  training_completed: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
