import { AuthForm } from '@/components/auth/auth-form';
import type { AuthFormData } from '@/lib/auth/types';
import { toast } from 'sonner';

export function SignUp() {
  const handleSubmit = async (data: AuthFormData) => {
    try {
      // In a real app, make API call to register
      console.log('Sign up:', data);
      toast.success('Account created successfully!');
      window.location.href = '/';
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <p className="mt-2 text-gray-600">
            Join BudgetBites and start making a difference
          </p>
        </div>

        <AuthForm type="signup" onSubmit={handleSubmit} />

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a
            href="/auth/sign-in"
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}