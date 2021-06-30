// Update with your config settings.
module.exports = {
    client: 'postgres',
    connection: {
      database: 'knowledge',
      user:     'postgres',
      password: '1234'
    },
    
    pool: {
      min: 2,
      max: 20
    },

    migrations: {
      tableName: 'knex_migrations'
    }

};
