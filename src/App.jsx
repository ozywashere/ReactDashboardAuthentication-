import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import RegisterEmailVerify from './pages/auth/RegisterEmailVerify';
import ForgotSuccess from './pages/auth/ForgotSuccess';
import ResetPassword from './pages/auth/ResetPassword';
import ResetPasswordSuccess from './pages/auth/ResetPasswordSuccess';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/support', element: <Support /> },
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/reset-password', element: <ResetPassword /> },
  { path: '/reset-success', element: <ResetPasswordSuccess /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/forgot-success', element: <ForgotSuccess /> },
  { path: '/register-email-verify', element: <RegisterEmailVerify /> },

  { path: '*', element: <PageNotFound /> },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
