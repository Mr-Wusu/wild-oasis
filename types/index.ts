export interface Country {
  name: string;
  flag: string;
  independent: string;
}

export enum Role {
  ADMIN = "ADMIN",
  TEST_ADMIN = "TEST_ADMIN",
  USER = "USER",
}

export interface User {
  id: string;
  firstname: string;
  surname: string;
  email: string;
  password: string;
  role: Role;
}

export interface AuthUser {
  firstname: string;
  surname: string;
  email: string;
  role: Role;
}

export interface Cabin {
  id: string;
  discount: number;
  name: string;
  maxCapacity: number;
  image: string;
  regularPrice: number;
}