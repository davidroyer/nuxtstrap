# Notes

## Now

If using Now CLI and deploying a static site then it's necessary to set the
`build` script in `packages.json` to `nuxt generate` instead of the
normal/default `nuxt build`.

This is because Now uses that `build` script to build the project on the servers
when deploying.

## Sitemap Module

## Dynamic Routes

If you are generating a static site via `nuxt generate` and have dynamic routes
then that means you should have existing functionality setup for Nuxt's
`generate` property. For example:

```js
export default {
  generate: {
    async routes() {
      const { data } = await axios.get('https://json-api.now.sh/posts')
      return data.map((post) => `posts/${post.id}`)
    },

    fallback: true
  }
}
```

The `@nuxtjs/sitemap` module will use this value for it's own `routes` property
so that your dynamic routes get listed in `sitemap.xml`.

You can test this by removing the `generate` code and run `nuxt generate` for
your project and you'll notice no dynamic routes are includes in `sitemap.xml`.
They **ARE** there though if you put your `generate` code back and run the `nuxt generate` once more.
