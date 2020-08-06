import React from 'react';

import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    Axios.get('http://localhost:3005/allproducts')
      .then(response => {
        this.setState({ products: response.data })
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
    <div>
      <h1>Products</h1>
      <table border="2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Qantity</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map(function (item, key) {

            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.Product_Name}</td>
                <td>{item.Product_Category}</td>
                <td>{item.Product_Quantity}</td>
                <td>{item.Product_Price}</td>
              </tr>
            )

          })
          }
        </tbody>

      </table>
    </div>
    )
  }
}

export default App;
