const axios = require('axios')
const config = require('./config')

const articleList = async (ctx, next) => {
  let response = await axios.get('https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0')
  ctx.body = response.data
}

const inTheaters = async (ctx, next) => {
  let response = await axios.get(config.inTheaters)
  ctx.body = response.data
}

const getDetail = async (ctx, next) => {
  let queryArr = ctx.url.split('/')
  let id = queryArr[queryArr.length -1]
  let response = await axios.get(config.detail + id)
  ctx.body = response.data
}

module.exports = {
  articleList,
  inTheaters,
  getDetail
}
