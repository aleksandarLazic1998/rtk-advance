import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export function AppLayout({ children }: IProps) {
  return <div>{children}</div>;
}
