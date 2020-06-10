import Header from '../header/Header';
import s from './layout.module.scss';
import Footer from '../footer/Footer';

const Layout = ({ children }) => (
  <div className={s.layout}>
    <header>
      <Header />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
