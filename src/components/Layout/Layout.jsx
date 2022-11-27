import { SLayout } from './Layout.styles';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <SLayout>
      <Outlet />
    </SLayout>
  );
};

export default Layout;
