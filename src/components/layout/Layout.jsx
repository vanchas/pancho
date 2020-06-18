import Header from '../header/Header';
import s from './layout.module.scss';
import Footer from '../footer/Footer';
import BasketStep_1 from '../modals/BasketStep_1';

const Layout = ({ children }) => (
  <div className={s.layout}>
    <BasketStep_1 />
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
