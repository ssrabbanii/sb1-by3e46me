import type { AuthFormData, ValidationErrors } from './types';

export const validateAuthForm = (data: Partial<AuthFormData>, isSignUp: boolean): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!data.password?.trim()) {
    errors.password = 'Password is required';
  } else if (isSignUp && data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (isSignUp) {
    if (!data.name?.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.userType) {
      errors.userType = 'Please select your user type';
    }

    if (data.userType !== 'customer') {
      if (!data.organizationName?.trim()) {
        errors.organizationName = 'Organization name is required';
      }
      if (!data.phoneNumber?.trim()) {
        errors.phoneNumber = 'Phone number is required';
      }
      if (!data.address?.trim()) {
        errors.address = 'Address is required';
      }
    }
  }

  return errors;
};