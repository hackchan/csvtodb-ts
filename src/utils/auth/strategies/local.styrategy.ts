import bcrypt from 'bcrypt'
import {Strategy} from 'passport-local'
import UserService from '../../../services/user.service'
import boom from '@hapi/boom'
const service = new UserService()
const localStrategy = new Strategy({usernameField:'username',passwordField:"password"},async (username,password,done)=>{
   try {
     const user = await service.findByUserName(username)
     if(!user) {
       done(boom.unauthorized(), false)
     }
     const isMatch = await bcrypt.compare(password, user.auth.password)
     if(!isMatch){
       done(boom.unauthorized(), false)
     }
     delete user.auth.password
     done(null,user)
   } catch (error) {
      done(error,false)
   }
})


export default localStrategy