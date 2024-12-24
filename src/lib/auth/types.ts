export type UserType = 'customer' | 'restaurant' | 'ngo';

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
  userType?: UserType;
  organizationName?: string;
  phoneNumber?: string;
  address?: string;
}

export interface ValidationErrors {
  [key: string]: string;
}