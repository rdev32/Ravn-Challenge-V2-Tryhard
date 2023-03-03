import 'dotenv/config'

export default {
    secret: process.env.SECRET || 'mysecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}