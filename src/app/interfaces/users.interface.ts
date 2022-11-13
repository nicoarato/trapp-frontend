export interface User {
    userId?: string;
    username?: string;
    password?: string;
    roles?: string;
}

export interface UserLogin {
    name: string;
    username: string;
    token: string;
}

export interface NewUser {
    document: string;
    legajo: string;
    firstname: string;
    lastname: string;
    username: string;
    address: string;
    password: string;
}
