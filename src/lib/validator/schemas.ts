export default {
  signUp: {
    firstName: 'required|string|min:2|max:20',
    lastName: 'required|string|min:2|max:20',
    username: 'required|string|min:2|max:20',
    email: 'required|email|max:320',
    password: 'required|min:8',
    confirmPassword: 'required|min:8|same:password'
  },
  changeUserPassword: {
    password: 'required|min:8',
    confirmPassword: 'required|min:8|same:password',
  },
  validateLoginValues: {
    usernameOrEmail: 'required|min:3',
    password: 'required|min:8'
  }
};
