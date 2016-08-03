export const SIGNIN = 'signIN'

export function signIn(email, password) {
  return {
    type: SIGNIN,
    payload: {
      email,
      password
    }
  }
}
