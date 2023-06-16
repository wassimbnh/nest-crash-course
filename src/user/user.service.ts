import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private userModel: mongoose.Model<User>
    ){}

    async register(user: CreateUserDto): Promise<User>{
        
        const errors = await validate(CreateUserDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    //password matching
    if(user.password != user.confirmPassword){
        throw new BadRequestException("Passwords do not match")
    }

    //check if user already exists 
    const userFind = await this.userModel.findOne({ email : user.email});
    if (userFind){
        throw new BadRequestException("This email is already registered")
    }

    //hash password 
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(user.password,salt);

    const newUser = {
        name: user.name,
        email: user.email,              
        password: hashPassword,
        role: user.role,
    }
    const res = await this.userModel.create(newUser);
    return res;
    }   

   async getUserByEmail(email: string): Promise<User | undefined> {
  const res = await this.userModel.findOne({ email: String(email) });
  return res;
}
      
      
      
      
}
 