import type { UserRole } from "../enums";

export interface IGetUserCompaniesListResponse {
  list: IUserCompany[];
  count: number;
}

export interface IUserCompany {
  id: number;
  companyId: number;
  userId: number;
  role: UserRole;
  createdAt?: string;
  updatedAt?: string;
  companyInfo: ICompany;
}

export interface ICompany {
  id: number;
  name: string;
  peopleInCompany: number;
  direction: string;
  createdAt?: Date;
  updatedAt?: Date;
}
