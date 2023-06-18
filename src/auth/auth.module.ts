import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'sdffdfdkdf5885fdgfdgv',
    signOptions: { expiresIn: '1d'},
  })],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  controllers: [AuthController]
})
export class AuthModule {}
