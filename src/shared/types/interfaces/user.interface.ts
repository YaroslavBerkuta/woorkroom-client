import type { UserStatus } from "../enums";

export interface IUser {
  id: number;
  email: string;
  name?: string;
  phoneNumber: string;
  status: UserStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
