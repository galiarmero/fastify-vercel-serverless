export default async function example(fastify, opts) {
    fastify.get('/example', async function (request, reply) {
        return 'this is an example'
    })
}
