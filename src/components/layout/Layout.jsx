import Header from '../header/Header';
import s from './layout.module.scss';
import Footer from '../footer/Footer';
import ShoppingCard_1 from '../modals/ShoppingCard_1';
import ScrollWidget from "../modals/ScrollWidget";
import { connect } from "react-redux";
import SuccessAlert from "../modals/SuccessAlert";
import FailureAlert from "../modals/FailureAlert";

const Layout = ({ children, ordersAmount, success, failure }) => (
  <div className={s.layout}>
    {success && <SuccessAlert />}
    {failure && <FailureAlert />}
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
  ordersAmount: state.user.ordersAmount,
  success: state.user.showSuccess,
  failure: state.user.showFailure,
})
export default connect(mapStateToProps, null)(Layout);
