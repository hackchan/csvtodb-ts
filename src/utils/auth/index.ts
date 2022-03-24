import passport from 'passport'
import localStrategy from './strategies/local.styrategy'
import JwtStrategy from './strategies/jwt.styrategy'

passport.use(localStrategy)
passport.use(JwtStrategy)