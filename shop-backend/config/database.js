const path = require('path');

// strapi-api/config/database.js
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: false,
    },
    debug: false,
  },
});
