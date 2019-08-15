import netlifyIdentity from 'netlify-identity-widget';

export default (context, inject) => {
  console.log('RAN FROM AUTH.JS');
  // await ctx.store.dispatch("nuxtClientInit", ctx);
  if (process.client) {
    window.netlifyIdentity = netlifyIdentity
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init();
    netlifyIdentity.on("login", user => context.store.commit('setUser', user));
    netlifyIdentity.on("logout", () => context.store.commit('setUser', null));

    const user = netlifyIdentity.currentUser();
    console.log(user);
    if (user) {
      console.log('Found user!');
      context.store.commit('setUser', user)
    }
  }
  // app.i18n = new VueI18n({
    /* `VueI18n` options... */
  // })
}
