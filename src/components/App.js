import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    succSignup: state.signup,
    succLogin: state.login,
    succAddRecipe: state.addRecipe,
    user: state.checkIfLoggedIn,
    currRecipe: state.currRecipe,
    myRecipes: state.myRecipes,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
