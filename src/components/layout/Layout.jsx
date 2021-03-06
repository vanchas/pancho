import Header from '../header/Header';
import s from './layout.module.scss';
import Footer from '../footer/Footer';
import ShoppingCard_1 from '../modals/ShoppingCard_1';
import ScrollWidget from "../modals/ScrollWidget";

const Layout = ({ children }) => (
  <div className={s.layout}>
    <ScrollWidget />
    <ShoppingCard_1 />
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
