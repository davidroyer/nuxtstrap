var axios = require('axios');
var fs = require('fs-extra')


// const postRoutes = () => {
//   return axios.get('https://fire-tests.firebaseio.com/posts.json')
//   .then((res) => {
//     return _.map(res.data, function(post, key) {
//       return `/posts/${post.slug}`
//     })
//   })
// }


module.exports = function scraper() {
  const writeData = (path, data) => {
    return new Promise((resolve, reject) => {
      try {
        fs.ensureFileSync(path)
        fs.writeJson(path, data, resolve(`${path} Write Successful`) )
      } catch (e) {
        console.error(`${path} Write Failed. ${e}`)
        reject(`${path} Write Failed. ${e}`)
      }
    })
  }

  function fetchJSON() {
    return axios.get('https://nuxtstrap.nuxtjs-quickstart.com/api/posts')
      .then(res => {
         let apiData = res.data
         console.log('apiData: ', apiData);
         return apiData
      })
  }
  // Add hook for build
  this.nuxt.hook('build:before', async builder => {

    // Clean data directory
    fs.emptyDir('static/data')
    fs.emptyDir('static/api')

    // Empty array to fill with promises
    const scraper = []
    const apiJSON = await fetchJSON()
    console.log('apiJSON', apiJSON);
    // One of these for every top level page, a loop for dynamic nested pages
    scraper.push(writeData('static/api/index.json', apiJSON))

    // Finish when all of them are done
    return Promise.all(scraper).then(() => {
      console.log('JSON Build Complete!')
    }).catch(err => {
      console.log(console.error(err))
    })
  });
}
