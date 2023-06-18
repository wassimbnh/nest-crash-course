import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService){}
  @UseGuards(LocalAuthGuard)

  @Post('login')

  async login(@Request() req) {
    return this.authService.generateToken(req.user);
  }

  @Get("user")

  async user(){

  }
}
