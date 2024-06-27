import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <main className='w-full min-h-screen p-10 flex justify-center items-center'>{children}</main>;
};

export default AuthLayout;