import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import css from './layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigate}>
          <Link className={css.linkNav} to="/">
            Home
          </Link>
          <Link className={css.linkNav} to="/movies">
            Movies
          </Link>
        </nav>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </header>
    </>
  );
};

export default Layout;
