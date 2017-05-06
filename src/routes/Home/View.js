import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import RecipeList from '../../components/RecipeList';

class Home extends Component {

  componentWillMount() {
    this.props.requestRecentRecipes();
  }

  render() {
    return (
      <div>
        <Divider />
        <RecipeList {...this.props} />
      </div>
    );
  }
}

export default Home;
