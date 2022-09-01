import sensiblePlugin from './plugins/sensible.js'
import utilPlugin from './plugins/util.js'
import rootRoute from './routes/root.js'
import exampleRoute from './routes/example/index.js'

export default async function (fastify, opts) {
    const app = fastify

    app.register(sensiblePlugin)
    app.register(utilPlugin)

    app.register(rootRoute)
    app.register(exampleRoute)
  
    return app
}
