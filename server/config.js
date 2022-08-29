const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.PORT,
        database: process.env.DB
    },
};
module.exports = config; 