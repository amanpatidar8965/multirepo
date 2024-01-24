import { User } from 'src/user/entities/user.entity';
import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    return this.authService.generateToken(req.user);
  }

  @Get('/android-developer')
  @UseGuards(AuthGuard('jwt'))
  androidDeveloperData(): string {
    return 'this is a private data of android developer';
  }
}
