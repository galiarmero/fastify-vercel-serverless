import autoload from '@fastify/autoload'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default async function (fastify, opts) {
    const app = fastify

    fastify.log.error(join(__dirname, 'routes'))
    fastify.log.error(join(__dirname, 'plugins'))
    fastify.log.error(join(__dirname, '..', 'node_modules'))

    try {
        if (fs.existsSync(join(__dirname, '..', 'node_modules'))) {
            fastify.log.error("node_modules directory exists")
        }
    } catch (err) {
        fastify.log.error("Error checking if node_modules exist: " + err)
    }

    app.register(autoload, {
      dir: join(__dirname, 'routes')
    })
  
    app.register(autoload, {
      dir: join(__dirname, 'plugins')
    })
  
    return app
}
