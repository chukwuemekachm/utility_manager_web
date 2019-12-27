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
    password: 'required|min:8'
  }
};
