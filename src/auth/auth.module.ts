import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,

    JwtModule.register({
      secret: 'key',
      signOptions: {
        expiresIn: '60d',
      },
    }),
  ],
  controllers: [],
  providers: [PassportLocalStrategy, JwtStrategy, AuthService ],
  exports: [AuthService],
})
export class AuthModule {}
