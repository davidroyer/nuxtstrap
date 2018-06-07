export default function (context) {
  // console.log(process.env.PASSWORD);
  const renderedFrom = process.server ? 'Server' : 'Client'
  context.store.commit('setRenderedResult', renderedFrom)
}
