import { Component } from '@nestjs/common';

import { User } from '../interfice/user';

@Component()
 export class UserRegistration {
    private user: User[] = [];

    setUser( user: User ): void {
        this.user.push( user );
    }

    findAllUser(): User[] {
        return this.user;
    }
}