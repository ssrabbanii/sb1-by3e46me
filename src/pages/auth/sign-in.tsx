import { AuthForm } from '@/components/auth/auth-form';
import type { AuthFormData } from '@/lib/auth/types';
import { toast } from 'sonner';

export function SignIn() {
  const handleSubmit = async (data: AuthFormData) => {
    try {
      // In a real app, make API call to authenticate
      console.log('Sign in:', data);
      toast.success('Successfully signed in!');
      window.location.href = '/';
    } catch (error) {
      toast.error('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-gray-600">
            Sign in to your BudgetBites account
          </p>
        </div>

        <AuthForm type="signin" onSubmit={handleSubmit} />

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a
            href="/auth/sign-up"
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}