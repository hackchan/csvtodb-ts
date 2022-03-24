import {Strategy, ExtractJwt} from 'passport-jwt'
import config from '../../../config'
const options:any = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:config.api.jwt
}

const JwtStrategy = new Strategy(options,(payload, done)=>{
  try {
     console.log('payload:',payload)
     return done(null, payload)
  } catch (error) {
    console.log(error)
     done(error,null)
  }

})


export default JwtStrategy