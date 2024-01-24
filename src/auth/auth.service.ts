import { JwtModule, JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  //id card
  generateToken(payload: User): string {
    return this.jwtService.sign(payload);
  }
}
