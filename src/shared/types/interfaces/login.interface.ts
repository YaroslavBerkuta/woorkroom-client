import type { IUser } from "./user.interface";

export interface LoginDto {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
