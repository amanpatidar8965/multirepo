import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'Aman@1',
      email: 'aman@gmail.com',
    },
    {
      username: 'user2',
      password: 'Aman@2',
      email: 'aman@gmail.com',
    },
    {
      username: 'user3',
      password: 'Aman@3',
      email: 'aman@gmail.com',
    },
  ];

  getUserByName(userName: string): User {
    return this.users.find((user: User) => user.username === userName);
  }
}
