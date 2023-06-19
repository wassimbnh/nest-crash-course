import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.gard';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('login')

  async login(@Request() req): Promise<any> {
    return this.authService.generateToken(req.user);
  }

  
  @UseGuards(JwtAuthGuard) 
  @Get("user")

  async user(@Request() req): Promise<any>{
    return req.user;
  }
}
