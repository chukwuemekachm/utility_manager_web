const EMAIL = 'required|email|max:320';
const PASSWORD = 'required|min:8';
export default {
  signUp: {
    firstName: 'required|string|min:2|max:20',
    lastName: 'required|string|min:2|max:20',
    username: 'required|string|min:2|max:20',
    email: EMAIL,
    password: PASSWORD,
    confirmPassword: `${PASSWORD}|same:password`,
  },
  changeUserPassword: {
    password: PASSWORD,
    confirmPassword: `${PASSWORD}|same:password`,
  },
  forgotPassword: {
    email: EMAIL,
  },
  validateLoginValues: {
    usernameOrEmail: 'required|min:3',
    password: 'required|min:8',
  },
  updatePassword: {
    currentPassword: PASSWORD,
    newPassword: PASSWORD,
    confirmPassword: `${PASSWORD}|same:newPassword`,
  },
  createApplianceCategory: {
    name: 'required|min:3',
    description: 'required|min:10',
  },
  createParameter: {
    name: 'required|min:4',
    valueType: 'required|in:NUMERIC,STRING',
    unitId: 'min:19',
  },
  addAppliance: {
    parameters: 'required|array|min:1',
    specs: 'required',
    label: 'required|min:2',
  },
};
