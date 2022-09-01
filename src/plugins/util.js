import fastifyPlugin from 'fastify-plugin'

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope

export default fastifyPlugin(async function (fastify, opts) {
  fastify.decorate('util', {
    getGreeting: () => {
        const currentHour = new Date().getHours()

        if (currentHour < 12) {
            return `Good morning!`
        } else if (curHr < 18) {
            return `Good afternoon!`
        } else {
            return `Good evening!`
        }
    },
  })
})
