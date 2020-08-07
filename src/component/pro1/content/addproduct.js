import React from 'react';
import axios from 'axios';
class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            productid:'',
            productname:'',
            productcategory:'',
            productprice:'',
           
        }
    }

    
       

    getId=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        
        this.setState({productid: event.target.value})
    
        
        }

     getName=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
       
        this.setState({productname: event.target.value})
        

        }

        getCategory=(event)=>{
        
            console.log(event)
            console.log(event.target)
            console.log(event.target.value)
           
           
    
            }

            getQuantity=(event)=>{
        
                console.log(event)
                console.log(event.target)
                console.log(event.target.value)
             
                this.setState({productquantity: event.target.value})
               
        
                }

                getPrice=(event)=>{
        
                    console.log(event)
                    console.log(event.target)
                    console.log(event.target.value)
                  
                    this.setState({productprice: event.target.value})
                   
            
                    }


        addProduct=()=>{
            console.log('Add friend via axios and post')
            let productRequestBody = {
                "id":this.state.productid,
                "Product_Name": this.state.productname,
                "Product_Category": this.state.productcategory,
                "Product_Quantity":this.state.productquantity,
                "Product_Price":this.state.productprice
                
            }
            axios.post('http://localhost:3000/allproducts', productRequestBody)
                    .then(response=>{
                        console.log(response);
                        this.props.history.push('/')
                    }, error=>{
                        console.error(error);
                    })
        }


    render() { 
      
        
        return (
            <div className="container c1" style={{width:'30%',align:'center',backgroundColor: 'lightblue'}}>
                <h3>Add New Product</h3>
                <form>
                <p>Product id: </p>
                    <input type='text' id="productid" onChange={this.getId}></input>
                    {this.state.nameError}
                   

                    <p>Product Name: </p>
                    <input type='text' id="productname" onChange={this.getName}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Category: </p>
                    <input type='text' id="productcategory" onChange={this.getCategory}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Quantity: </p>
                    <input type='number' id="productquantity" onChange={this.getQuantity}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Price: </p>
                    <input type='number' id="productprice" onChange={this.getPrice}></input>
                    {this.state.nameError}
                    <br></br> <br></br>

                    <button type="button" onClick={this.addProduct} disabled={this.state.buttonStatus}>Add Product</button>
                    <br></br>
                    
                    
                </form>
            </div>
          );
    }
}
 
export default AddProduct;