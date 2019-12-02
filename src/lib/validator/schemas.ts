export default {
  signUp: {
    firstName: 'required|string|min:2|max:20',
    lastName: 'required|string|min:2|max:20',
    username: 'required|string|min:2|max:20',
    email: 'required|email|max:50',
    password: 'required|alpha_dash|min:8|max:20',
    confirmPassword: 'required|alpha_dash|min:8|max:20|same:password'
  },
  changeUserPassword: {
    password: 'required|min:8',
    confirmPassword: 'required|min:8|same:password'
  },
};
