/**
 * 加密函数（签名函数）
 */
const crypto = require('crypto');

const secret = 'ssdioweiwoedd23'; // 密钥
// function md5(val) {
//   return crypto.createHmac('sha256', secret)
//           .update(val)
//           .digest('hex')
// }

function md5(val) {
  return crypto.createHash('sha256')
          .update(`${val}${secret}`)
          .digest('hex')
}

console.log(md5(md5('123456')));
