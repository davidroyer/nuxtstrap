# Miscellaneous

> This is for info that don't have a clear home yet

## Head/Meta

### For The Page Title

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
