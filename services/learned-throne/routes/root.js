/// <reference path="../global.d.ts" />
/// <reference path="../nakamoto/nakamoto.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/learned-throne', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      } 
    }
  }, async (request, reply) => {
    return await request.nakamoto.getExample()
  })
}
