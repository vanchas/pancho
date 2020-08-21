import Header from '../header/Header';
import s from './layout.module.scss';
import Footer from '../footer/Footer';
import ShoppingCard_1 from '../modals/ShoppingCard_1';
import ScrollWidget from "../modals/ScrollWidget";
import { connect } from "react-redux";

const Layout = ({ children, ordersAmount }) => (
  <div className={s.layout}>
    <ScrollWidget />
    {parseInt(ordersAmount) > 0 && <ShoppingCard_1 />}
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

const mapStateToProps = state => ({
  ordersAmount: state.user.ordersAmount
})
export default connect(mapStateToProps, null)(Layout);
