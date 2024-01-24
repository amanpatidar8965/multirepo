import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { LibModule } from './lib/lib.module';


@Module({
  imports: [UserModule, AuthModule, LibModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
