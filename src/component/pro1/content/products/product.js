import React from 'react';

import Axios from 'axios';
import  './products.css';
import { Redirect } from "react-router-dom";
import AddProduct from '../addproduct';
import NavigationBar from '../../header/navbar';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      searchProducts:[],
            searchValue:'',
            editId:0,
            
            editClicked:false
    }
  }

  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    Axios.get('http://localhost:3000/allproducts')
      .then(response => {
        this.setState({ products: response.data })
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
  }

  deleteProduct=(event)=>{
    console.log(event.target.id);
    let id = event.target.id;
    console.log("id:",id)
    Axios.delete('http://localhost:3000/allproducts/'+id)
      .then(_response=>{
        console.log("Deletion Success");
        this.getProducts();
      },()=>{
        console.log("error occurred");
      })
 }


 openAddProduct=()=>{
  this.props.history.push('/addproduct');
  //this.props.history.push('/editfriend')
}


  getSearch=(e)=>{
    let searchV = e.target.value
    if(searchV===''){
        this.getProducts()
    }
    this.setState({searchValue: searchV})
    console.log(searchV);
    let searchF = this.state.products.filter(p=>{
                            return p.Product_Name.match(searchV)
                        })
    console.log(searchF);    
    this.setState({products: searchF})  


}

editHandler=(event)=>{
  console.log(event.target.id);
    let id = event.target.id;
    console.log("id:",id)
    Axios.get('http://localhost:3000/allproducts/'+id)
  //this.setState({editId:id});
  console.log("set:",id)
 this.setState({editClicked:true})
}



  render() {

    let imgStyle ={
      width:'60px',
      borderradius: '50%'
     
  }
  

  

    if(this.state.editClicked){
      this.setState({editClicked:false})
      console.log()
      return <Redirect to={{pathname:"/editproduct" ,state:{
        product:this.state.products.filter(p=>p.id===this.state.editId)
      }}}></Redirect>
    }
   return (
     <div>
     <div>
       <NavigationBar></NavigationBar>
     </div>
     
    <div>

                  <div className="c2" style={{width:'30%',align:'center',backgroundColor: 'lightblue', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '30px 30% 0 35%'}}>
                  
                  <label>Search: </label>
                  <input type="text" value={this.state.searchValue} onChange={this.getSearch}></input>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <button onClick={this.openAddProduct}>Add Product</button>
                 



              </div>

              
              <div className="c2" style={{width:'100%',backgroundColor: 'lightblue', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '0px 0% 0px 2%'}}>
      <h1>Products </h1>
      <table border='1'>
                <tr>
              <th>Product Id</th>
                  <th>Product Name</th>
                  <th>Manufacturer</th>
                  <th>Vendor</th>
                  <th>Product Quantity</th>
                  <th>Product Price</th>
                  <th>Product Image</th>
                  <th></th>
                  <th></th>
                  
                  
                </tr>
                  {this.state.products.map(product=>{
                    return (

                      
                      <tr>
                <td>{product.id}</td>
                  <td>{product.Product_Name}</td>
                 
                    <td>{product.Manufacturer}</td>
                    <td>{product.Vendor}</td>
                  <td>{product.Product_Quantity}</td>
                  <td>{product.Product_Price}</td>
                  <td><img src={"images/" + product.Product_Image} style={imgStyle}></img></td>
                  
                  <td><input type="button" class="btn" id={product.id} value="Edit"  onClick={this.editHandler} /></td>
                  <td><input type="button" class="btn2"id={product.id} value="Delete"  onClick={this.deleteProduct} /></td>
                </tr>
                    )
                  })}
                
               
              </table>
      </div>
     
    </div>
    </div>
    )
  }
}

export default App;
