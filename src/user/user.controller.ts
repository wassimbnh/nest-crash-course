import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor( private userService: UserService){}


    @Post("register")
    async register(
        @Body() user: CreateUserDto
    ): Promise<User>{
        return this.userService.register(user);
    }

    @Get('getByEmail')
    async getUserByEmail( email: string): Promise<User | undefined>{

        return this.userService.getUserByEmail(email);
    }
}
