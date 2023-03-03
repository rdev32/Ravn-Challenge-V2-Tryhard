import swaggerJsdoc, { type Options } from 'swagger-jsdoc'

const options: Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Snack Shack API',
        version: '1.0.0',
        description: 'Tiny snack store API',
      },
    },
    apis: ['**/*.ts'],
}

const specs = swaggerJsdoc(options)

export default specs