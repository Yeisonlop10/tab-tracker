module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "tabtracker",
    user: process.env.DB_USER || "tabtracker",
    password: process.env.DB_PASS || "tabtracker",
    options: {
      dialect: process.eventNames.DIALECT || "sqlite",
      host: process.eventNames.HOST || "localhost",
      storage: "./tabtracker.sqlite"
    }
  }, 
  // This will be used to sign the JWT passing the secret string,
  // that string is only known by the server
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
};
