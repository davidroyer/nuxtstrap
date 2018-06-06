export default function ({ store, redirect }) {
  console.log('FROM: auth-check.js');

  if (!store.state.user && process.browser) {
    return redirect('/login')
  }
}
