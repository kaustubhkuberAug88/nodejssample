module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root@123",
    DB: "kickoff",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }    
};