import LocationModal from '../components/modals/LocationModal'
import { connect } from 'react-redux';
import Test from '../assets/images/test.svg'

function Home({ city }) {
  return (
    <div>
      <LocationModal
        city={city} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  city: state.user.currentCity
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
