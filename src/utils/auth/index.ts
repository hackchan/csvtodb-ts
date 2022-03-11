import passport from 'passport'
import localStrategy from './strategies/local.styrategy'
passport.use(localStrategy)