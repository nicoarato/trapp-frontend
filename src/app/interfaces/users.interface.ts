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
    email: string;
    state: string;
    city: string;
    firstname: string;
    lastname: string;
    username: string;
    address: string;
    password: string;
}
