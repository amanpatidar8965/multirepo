import { Strategy } from 'passport-local';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
declare const PassportLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class PassportLocalStrategy extends PassportLocalStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(username: string, password: string): User;
}
export {};
