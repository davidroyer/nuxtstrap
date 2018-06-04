export default function ({ store, redirect }) {
  console.log('FROM: auth-check.js');
  
  if (!store.state.user) {
    return redirect('/login')
  }
}
