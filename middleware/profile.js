export default function ({ store, $auth }) {
  if ($auth.loggedIn) {
    store.dispatch('profile/getProfile')
  }
}