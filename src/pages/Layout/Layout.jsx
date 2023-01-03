import NavBar from 'components/NavBar/NavBar';
import { Audio } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const isContentLoad = useSelector(state => state.auth.isLoading);

  return (
    <>
      <NavBar />
      {isContentLoad ? (
        <div style={{ margin: '100px auto 0 auto', width: '80px' }}>
          <Audio height="80" width="80" radius="9" color="green" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Layout;
