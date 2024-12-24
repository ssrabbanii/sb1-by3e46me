import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserTypeSelector } from './user-type-selector';
import type { AuthFormData, UserType, ValidationErrors } from '@/lib/auth/types';
import { validateAuthForm } from '@/lib/auth/validation';

interface AuthFormProps {
  type: 'signin' | 'signup';
  onSubmit: (data: AuthFormData) => void;
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    name: '',
    userType: undefined,
    organizationName: '',
    phoneNumber: '',
    address: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAuthForm(formData, type === 'signup');
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  const handleUserTypeChange = (userType: UserType) => {
    setFormData((prev) => ({ ...prev, userType }));
    if (errors.userType) {
      setErrors((prev) => ({ ...prev, userType: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === 'signup' && (
        <>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              error={errors.name}
            />
          </div>

          <div className="space-y-2">
            <Label>I am a</Label>
            <UserTypeSelector
              selected={formData.userType}
              onChange={handleUserTypeChange}
              error={errors.userType}
            />
          </div>

          {formData.userType && formData.userType !== 'customer' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="organizationName">
                  {formData.userType === 'restaurant' ? 'Restaurant Name' : 'Organization Name'}
                </Label>
                <Input
                  id="organizationName"
                  value={formData.organizationName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, organizationName: e.target.value }))}
                  error={errors.organizationName}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                  error={errors.phoneNumber}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  error={errors.address}
                />
              </div>
            </>
          )}
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          error={errors.email}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          error={errors.password}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700"
      >
        {type === 'signin' ? 'Sign In' : 'Create Account'}
      </Button>
    </form>
  );
}