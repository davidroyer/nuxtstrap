# Site Data

> Tips of using `YAML` and `JSON` to seperate out data from our code.

```yaml
nav:
  - title: Shop
    path: /shop

  - title: Wholesale
    path: /wholesale

  - title: Locations
    path: /locations

  - title: Our Store
    path: /our-store
```

**`nuxt.config.js`**

```js
export default {
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
    }
  }
}
```

**`store/index.js`**

```js
import siteData from '@/db/site.yml'

export const state = () => ({
  nav: siteData.nav
})
```
