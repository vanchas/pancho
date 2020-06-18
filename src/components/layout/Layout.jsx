import Header from '../header/Header';
import s from './layout.module.scss';
import Footer from '../footer/Footer';
import BasketModal from '../modals/BasketModal';

const Layout = ({ children }) => (
  <div className={s.layout}>
    <BasketModal />
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
