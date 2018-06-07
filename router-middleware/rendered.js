export default function (context) {
  const renderedFrom = process.server ? 'Server' : 'Client'
  context.store.commit('setRenderedResult', renderedFrom)
}
