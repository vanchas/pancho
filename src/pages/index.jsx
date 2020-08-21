import LocationModal from '../components/modals/LocationModal'
import { connect } from 'react-redux';
import React from "react";

function Home({ city }) {
  return (
    <div>
      <LocationModal
        city={city} />
      <p className={`pt-5 container`}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto delectus nemo odio possimus repellendus repudiandae, sunt veniam voluptate. Cum debitis doloribus eaque expedita obcaecati pariatur perspiciatis ratione tempora?</span><span>Adipisci at atque beatae blanditiis commodi consequuntur culpa cum cumque debitis, dolorem earum illum itaque laudantium magnam modi molestiae mollitia nemo nihil nostrum obcaecati quis rem sit unde vitae voluptate.</span><span>Ab accusamus accusantium at, aut consequatur deserunt dicta ducimus, eligendi explicabo facilis fuga fugiat harum illo, in ipsum libero minus natus officia provident quidem repudiandae suscipit tenetur unde ut veniam!</span><span>Blanditiis cum, dolorum earum eius enim facilis id ipsam nulla quia quidem quisquam sequi tenetur velit veniam vero? Amet architecto, at consectetur hic ipsa officiis soluta voluptate? Minus, rerum voluptate.</span><span>Atque aut commodi consequatur consequuntur culpa cum cumque, deleniti ducimus, eaque eligendi eum exercitationem hic incidunt laboriosam modi nesciunt obcaecati placeat porro praesentium quasi quo quod repellat vel veritatis vero.</span><span>A asperiores autem commodi labore modi officiis quaerat, repudiandae sapiente. Autem, consectetur consequuntur cupiditate eaque iste iusto laborum mollitia nemo nostrum pariatur, perspiciatis praesentium quaerat quasi quia sequi sint, suscipit!</span><span>Beatae blanditiis culpa illo in, neque officia quaerat quam qui quisquam ratione suscipit totam, veritatis. Beatae eos expedita odio quo voluptates. Corporis, doloribus in ipsa magnam molestias praesentium provident veritatis?</span><span>Accusantium cum ea expedita in labore, non nostrum quisquam soluta. Aut beatae cumque explicabo facilis fugiat hic, illo magni minima mollitia nobis pariatur provident quos recusandae sapiente sint, suscipit voluptatem!</span><span>Maiores mollitia praesentium vitae. Aspernatur consectetur cumque dolor, eos est eum fugiat iste iusto laboriosam libero magnam nobis officiis quis recusandae rerum sapiente sequi sit soluta tempora tenetur, veritatis voluptatibus.</span><span>Aperiam commodi eligendi labore quod voluptate? Commodi dolorem dolorum facere fuga, ipsum possimus qui ratione sunt tenetur voluptas? Ad cupiditate dolorem ipsam laborum possimus tenetur voluptate. At enim omnis recusandae.</span>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  city: state.user.currentCity
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
