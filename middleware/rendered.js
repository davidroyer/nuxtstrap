export default function (context) {
  console.log(context);
  const renderedFrom = process.server ? 'Server' : 'Client'
  context.store.commit('setRenderedResult', renderedFrom)
}
