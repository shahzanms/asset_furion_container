export interface AuthState {
  authenticated: boolean;
  token: string;
}

export interface UserCredentials {
  userName: string;
  password: string;
}

export interface UserProfile {
  id?: number;
  userName: string;
  email: string;
  password?: string;
  role: Role;
}

export enum Role {
  'Admin',
  'Author',
  'Reader',
}
