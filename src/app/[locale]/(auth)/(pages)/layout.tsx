import React from 'react';

import InfoBar from '@/components/infobar';
import Sidebar from '@/components/sidebar';

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex h-screen overflow-hidden rounded-l-3xl border-l border-t border-muted-foreground/20 pb-20">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
