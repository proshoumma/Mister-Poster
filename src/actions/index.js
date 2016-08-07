export const SIGNEDIN = 'SIGNEDIN'
export const SIGNEDOUT = 'SIGNEDOUT'
export const SAVEPOSTS = 'SAVEPOSTS'

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

export function savePosts(posts) {
  return {
    type: SAVEPOSTS,
    payload: posts
  }
}
