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
          <div className={css.container}>
            <Suspense fallback={<div className={css.loading}>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </header>
    </>
  );
};

export default Layout;
