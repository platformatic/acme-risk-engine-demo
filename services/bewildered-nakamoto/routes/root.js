/// <reference path="../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/example', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            ciao: { type: 'string' }
          }
        }
      } 
    }
  }, async (request, reply) => {
    return { ciao: fastify.example }
  })
}
