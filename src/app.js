import autoload from '@fastify/autoload'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default async function (fastify, opts) {
    const app = fastify

    fastify.log.error(join(__dirname, 'routes'))
    fastify.log.error(join(__dirname, 'plugins'))

    app.register(autoload, {
      dir: join(__dirname, 'routes')
    })
  
    app.register(autoload, {
      dir: join(__dirname, 'plugins')
    })
  
    return app
}
