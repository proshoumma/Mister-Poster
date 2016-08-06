export const SIGNEDIN = 'SIGNEDIN'
export const SIGNEDOUT = 'SIGNEDOUT'

export function signedIn(email, name, uid) {
  return {
    type: SIGNEDIN,
    payload: {
      email,
      name,
      uid
    }
  }
}

export function signedOut() {
  return {
    type: SIGNEDOUT,
    payload: {}
  }
}
