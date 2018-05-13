import { Component } from '@nestjs/common';

import { UserRegistrtion } from '../interfice/user';

@Component()
 export class UserRegistration {
    private user: UserRegistrtion[] = [];

    setUser( user: UserRegistrtion ): void {
        this.user.push( user );
    }

    findAllUser(): UserRegistrtion[] {
        return this.user;
    }
}