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

quantitySort = ()=>
{
  let ports
  
  ports = this.state.products.sort((a,b) =>{ return a.Product_Quantity - b.Product_Quantity} )
  console.log(ports)
  this.setState({products:ports})
  console.log(ports)
}

priceSort = ()=>
{
  let sorts1
  sorts1 = this.state.products.sort((a,b) =>{ return a.Product_Price - b.Product_Price} )
  this.setState({products:sorts1})
  console.log(sorts1)
}

sort = (event) => {
  let sv=event.target.value
  console.log(sv)
  // console.log("sort" + event.target.value)
  // this.setState({ sortValue: event.target.value })
  // console.log("sort" + this.state.sortValue)
  // if (this.state.sortValue == "price") {
  //     this.priceSort()

  // }
  // if (this.state.sortValue == "quantity") {
  //     this.quantitySort()

  // }
  if (sv == "price") {
      this.priceSort()

  }
  if (sv == "quantity") {
      this.quantitySort()

  }
 
}

  render() {

    let imgStyle ={
      width:'60px',
      height:'70px',
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

                  <div className="c2" style={{width:'100%',align:'center', padding: "45px 40px",margin: '30px 30% 0 30%'}}>
                  
                  <label>Search: </label>
                  <input type="text"  placeholder="serch for products" style={{padding: "15px 20px"}} value={this.state.searchValue} onChange={this.getSearch}></input>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <button style={{padding: "15px 20px"}} onClick={this.openAddProduct}>Add Product</button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <select id="sortValue" style={{padding: "15px 20px"}} onChange={this.sort}>
                    <option>Sort by</option>
                    <option>price</option>
                    <option>quantity</option>
                   
                </select>

                
              </div>
<div>
              
              {/* <div className="c2" style={{width:'100%',backgroundColor: 'lightblue', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '0px 0% 0px 2%'}}> */}
     
      <table >
                <tr>
              <th>Product Id</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Manufacturer</th>
                  <th>Vendor</th>
                  <th><span id="price" onClick={this.quantitySort}>
                  Product Quantity
                </span></th>
                  <th><span id="price" onClick={this.priceSort}>
                  Product Price
                </span></th>
                  <th>Product Image</th>
                  <th></th>
                  <th></th>
                  
                  
                </tr>
                  {this.state.products.map(product=>{
                    return (

                      
                      <tr>
                <td>{product.id}</td>
                  <td>{product.Product_Name}</td>
                  <td>{product.Product_Category}</td>
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
