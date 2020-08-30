import { Authority } from './authority';

export class User {
    username: string;
    firstName = '';
    lastName = '';
    authorities: Authority[];

    constructor(username: string) {
        this.username = username;
    }

    addAuthority(authority: Authority): void {
        if (authority) { this.authorities.push(authority); }
    }

    hasAuthority(authority: Authority): boolean{
        return this.authorities.includes(authority);
    }
}
