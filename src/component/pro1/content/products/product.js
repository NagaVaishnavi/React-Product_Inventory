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
            searchCat:'',
            searchMan:'',
            searchVen:'',
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
getSearch1=(e)=>{
  let searchC = e.target.value
  if(searchC===''){
      this.getProducts()
  }
  this.setState({searchCat: searchC})
  console.log(searchC);
  let searchCA = this.state.products.filter(p=>{
                          return p.Product_Category.match(searchC)
                      })
  console.log(searchCA);    
  this.setState({products: searchCA})  


}

getSearch2=(e)=>{
  let searchM = e.target.value
  if(searchM===''){
      this.getProducts()
  }
  this.setState({searchMan: searchM})
  console.log(searchM);
  let searchMA = this.state.products.filter(p=>{
                          return p.Manufacturer.match(searchM)
                      })
  console.log(searchMA);    
  this.setState({products: searchMA})  


}
getSearch3=(e)=>{
  let searchP = e.target.value
  if(searchP===''){
      this.getProducts()
  }
  this.setState({searchVen: searchP})
  console.log(searchP);
  let searchVE = this.state.products.filter(p=>{
                          return p.Vendor.match(searchP)
                      })
  console.log(searchVE);    
  this.setState({products: searchVE})  


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

                  <div className="c2" style={{width:'100%',align:'center', padding: "45px 40px"}}>
                  
                  
                  <input type="text"  placeholder="search by Name" style={{padding: "12px 20px",marginLeft:'3%',border: '1px solid grey',borderRadius:'60px'}} value={this.state.searchValue} onChange={this.getSearch}></input>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                 
                  <input type="text"  placeholder="serch by Category" style={{padding: "12px 20px",border: '1px solid grey',borderRadius:'60px'}} value={this.state.searchCat} onChange={this.getSearch1}></input>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                  <input type="text"  placeholder="serch by Manufacturer" style={{padding: "12px 20px",border: '1px solid grey',borderRadius:'60px'}} value={this.state.searchMan} onChange={this.getSearch2}></input>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                  <input type="text"  placeholder="serch by Vendor" style={{padding: "12px 20px",border: '1px solid grey',borderRadius:'60px'}} value={this.state.searchVen} onChange={this.getSearch3}></input>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                  <select id="sortValue" style={{padding: "15px 20px",border: '1px solid grey',borderRadius:'60px'}} onChange={this.sort}>
                    <option>Sort by</option>
                    <option>price</option>
                    <option>quantity</option>
                   
                </select>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                  <button style={{color:"white",padding: "15px 20px",border: '1px solid grey',borderRadius:'60px',backgroundColor: '#4C516D'}} onClick={this.openAddProduct}>Add Product</button>
                  

                 

                
              </div>
<div>
              
              {/* <div className="c2" style={{width:'100%',backgroundColor: 'lightblue', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '0px 0% 0px 2%'}}> */}
     
      <table >
                <tr>
              <th>Product Id</th>
             
                  <th>Product Name</th>
                  <th>Product_Code</th>
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
                  <th>Color</th>
                  <th>Rating</th>
                  <th>InStock</th>
                  {/* <th></th>
                  <th></th> */}
                  <th colSpan="2">Action</th>
                  
                  
                </tr>
                  {this.state.products.map(product=>{
                    return (

                      
                      <tr>
                <td>{product.id}</td>
                <td>{product.Product_Name}</td>
                <td>{product.Product_Code}</td>
                 
                  <td>{product.Product_Category}</td>
                    <td>{product.Manufacturer}</td>
                    <td>{product.Vendor}</td>
                  <td>{product.Product_Quantity}</td>
                  <td>{product.Product_Price}</td>
                  <td><img src={"images/" + product.Product_Image} style={imgStyle}></img></td>
                  <td>{product.Color}</td>
                  <td>{product.Rating}</td>
                    <td>{product.Instock}</td>
                  
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
