import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ItemListingContainer from './components/container/listing';
import ItemDetailContainer from './components/container/detail';
class App extends Component {
  async getCareforceEstimate() {
    return await fetch('api/delivery/estimate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  async getItemDetail() {
    return await fetch('api/inventory/itemDetail', {
      method: 'POST',
      body: JSON.stringify({
        itemId: "323af512ddfa485ebeadf0be17d6a136"
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return (
      <Router>
          <React.Fragment>
            <Route
              path="/:businessId"
              exact
              render={props => (
                <ItemListingContainer {...props} />
              )}
            />

            <Route
              path="/:businessId/item/:id"
              exact
              render={props => (
                <ItemDetailContainer {...props} />
              )}
            />
          </React.Fragment>
      </Router>
    );
  }

  componentDidMount() {
    this.getCareforceEstimate();
    this.getItemDetail();
  }
}

export default App;
