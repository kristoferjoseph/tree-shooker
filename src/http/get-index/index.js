const html = require('@begin/enhance')()

exports.handler = async function http() {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html`<hello-world>Halo Verld!</hello-world>`
  }
}
