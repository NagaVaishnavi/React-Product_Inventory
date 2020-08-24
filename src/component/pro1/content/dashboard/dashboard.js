import React from 'react';
import Chart from "react-google-charts";
import Axios from "axios";
import NavigationBar from '../../header/navbar';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartData: [["category", "qauantity."]],
      barChartData2: [["productName", "quantity"]],
      categories: [],
      products: [],
      productNames: []
    }
  }
  componentWillMount() {

    this.getAllProducts();


    this.getProductNames();





  }

  getAllProducts = () => {

    Axios.get('http://localhost:3000/allproducts')
      .then(response => {
        this.setState({ products: response.data })

        let categoryArr = [];
        response.data.map(data => {

          categoryArr.push(data.Product_Category)


        })

        this.setState({ categories: categoryArr })





        let arr = this.state.categories.filter((value, index, self) => self.indexOf(value) === index)





        arr.map(datamap => {


          let quantity = []


          quantity = this.state.products.filter(prod =>


            prod.Product_Category === datamap


          )


          console.log(quantity)


          let count = 0;


          quantity.map(data => {


            count = parseInt(data.Product_Quantity) + count;


            console.log(count)


          })


          this.state.barChartData.push([datamap, parseInt(count)]);


        })











      }).catch(err => {


        console.log(err)


      })


    console.log(this.state.barChartData)


  }





  getProductNames = () => {


    Axios.get('http://localhost:3000/allproducts')


      .then(response => {


        this.setState({ productNames: response.data })


        let productnameArr = [];





        response.data.map(data => {


          productnameArr.push(data.Product_Name)


        })





        this.setState({ productNames: productnameArr })

        let pnarr = this.state.productNames.filter((value, index, self) => self.indexOf(value) === index)





        pnarr.map(datamap => {


          let pnquantity = []


          pnquantity = this.state.products.filter(prod =>


            prod.Product_Name === datamap


          )


          console.log(pnquantity)


          let count = 0;


          pnquantity.map(data => {


            count = parseInt(data.Product_Quantity) + count;


            console.log(count)


          }, 0);


          this.state.barChartData2.push([datamap, parseInt(count)]);


        })











      }).catch(err => {


        console.log(err)


      })


    console.log(this.state.barChartData)


  }





  render() {


    return (
  
<div>
  <NavigationBar></NavigationBar>
      <div>


        <h3 style={{ marginLeft: "5%" }}>Stock of products based on category</h3>


        <div style={{ display: 'flex', maxWidth: 1100, margin: "5%" }}>





          <Chart


            chartType="Bar"


            loader={<div>Loading Chart</div>}


            data={this.state.barChartData}


            width="700px"


            height="400px"


            legendToggle


          />





          <Chart


            chartType="PieChart"


            loader={<div>Loading Chart</div>}


            data={this.state.barChartData2}


            options={{


              title: 'Stock of all products'


            }}


            width="1000px"


            height="500px"


            legendToggle


          />





        </div>


      </div>



</div>




    );


  }


}
export default Dashboard;