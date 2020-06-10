import Header from '../header/Header';
import s from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={s.layout}>
    <header>
      <Header />
    </header>
    <main>
      {children}
    </main>
  </div>
);

export default Layout;
