import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';

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
        throw new BadRequestException("Passwords do not match'")
    }
        const res = await this.userModel.create(user);
        return res;
    
    }

}
 