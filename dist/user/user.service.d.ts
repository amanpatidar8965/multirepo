import { User } from './entities/user.entity';
export declare class UserService {
    users: User[];
    getUserByName(userName: string): User;
}
