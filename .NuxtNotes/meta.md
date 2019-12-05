# Meta

## For The Page Title

If undefined or blank then we don't need the hyphen.

```js
{
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - My Site` : 'My Site'
    }
  }
}
```

## For Dynamic Routes

Normally `head` is an object but in order to get the corresponding information
with dynamic routes then it will be need to be a function

## Example Code

### As an `Object`

```js
export default {
  head: {
    title: 'Post'
  }
}
```

### As a `Function`

```js
export default {
  head() {
    return {
      title: this.post.title
    }
  }
}
```
