export default function ({ store, redirect }) {
  console.log('FROM: auth-check.js');

  if (process.client && !store.state.user) {
    return redirect('/login')
  }
}
