import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { LibModule } from './lib/lib.module';
import { LabModule } from './lab/lab.module';


@Module({
  imports: [UserModule, AuthModule, LibModule, LabModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
