'use strict'

const pltClient = require('@platformatic/client')
const { join } = require('path')

async function generateNakamotoClientPlugin (app, opts) {
  app.register(pltClient, {
    type: 'openapi',
    name: 'nakamoto',
    path: join(__dirname, 'nakamoto.openapi.json'),
    url: opts.url,
    serviceId: opts.serviceId,
    throwOnError: opts.throwOnError,
    fullResponse: false,
    fullRequest: undefined,
    validateResponse: false
  })
}

generateNakamotoClientPlugin[Symbol.for('plugin-meta')] = {
  name: 'nakamoto OpenAPI Client'
}
generateNakamotoClientPlugin[Symbol.for('skip-override')] = true

module.exports = generateNakamotoClientPlugin
module.exports.default = generateNakamotoClientPlugin
