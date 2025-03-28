import React from 'react';

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex h-screen">
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Layout;
