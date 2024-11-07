const axios = require('axios');
const searchVideo = async (keywords) => {
  var { data } = await axios(`https://api.phamvandien.xyz/tiktok?search=${encodeURI(keywords)}`);
  return data
};

const getData = async (url) => {
  var { data } = await axios(`https://api.phamvandien.xyz/tiktok?url=${url}`);
  return data
};
const getInfoUser = async (info) => {
  var { data } = await axios.get(`https://apiryo.ducryo.repl.co/tiktok/info${info}`)
  return data
}

module.exports = {
  getData,
  searchVideo,
  getInfoUser
}
