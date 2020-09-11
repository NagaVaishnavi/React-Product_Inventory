import React from 'react';
import Axios from 'axios';
import NavigationBar from '../header/navbar';
class EditProduct extends React.Component {
    state = { 
        pname:'',
      
        quantity:'',
        price:'',
        manufacturer:'',
        vendor:'',
        id:0,
        productimage:'',
        isSuccess:false
     }

     idChangeHandler=(e)=>{
        console.log(e.target.value)
       this.setState({id : e.target.value});
    }

     nameChangeHandler=(e)=>{
        console.log(e.target.value)
       this.setState({pname : e.target.value});
    }


   

    manufacturerChangeHandler=(e)=>{
        this.setState({manufacturer : e.target.value});
     }

     vendorChangeHandler=(e)=>{
        this.setState({vendor : e.target.value});
     }

    

    priceChangeHandler=(e)=>{
      this.setState({price:e.target.value})
    }

    quantityChangeHandler=(e)=>{
       this.setState({quantity:e.target.value})
     }

     getImage=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({productimage: event.target.value.substr(12)})
    }

    editProduct=(e)=>{
       
        console.log(this.state)
        let data={
            "Id":this.state.id,
            "Product_Name":this.state.pname,
            "Product_Category":this.state.category,
            "Manufacturer":this.state.manufacturer,
            "Vendor":this.state.vendor,
            "Product_Quantity":parseInt(this.state.quantity),
            "Product_Price":parseFloat(this.state.price)
            
            
        }
        console.log("data:",data)
        console.log("id:",this.state.id)

        Axios.put('http://localhost:3000/allproducts/'+this.state.id,data)
           .then(response=>{
               console.log(response);
               this.setState({isSuccess:true});
               this.props.history.push('/products')
           },error=>{
               console.log(error);
           })
    }



   render() { 
       return (
        <div>
        <NavigationBar></NavigationBar>
   <div>
   
   <div className="c2" style={{width:'30%',align:'center',backgroundColor: 'lightgrey', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '30px 30% 0 35%'}}>
   <h3>Edit Product</h3>
   <form>
               
   
                     <p>Product Id: </p>
                    <input type='text' id="productid" onChange={this.idChangeHandler}></input>
                    {this.state.nameError}
                    <br></br>

                   

                    <p>Product Name: </p>
    <select id="pcat" onChange={this.nameChangeHandler}>
<option>Accesories</option>
<option>Sunglasses</option>
<option>Handbags</option>
<option>gloves</option>
<option>Watches</option>
<option>Belts</option>
</select><span style={{ color: "red" }}>{this.nameChangeHandler}</span>
                    {this.state.nameError}
                    <br></br>

                    <p>Manufacturer: </p>
                    <input type='text' value={this.state.manufacturer} id="manufacturer" onChange={this.manufacturerChangeHandler}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Vendor: </p>
                    <input type='text' value={this.state.vendor} id="vendor" onChange={this.vendorChangeHandler}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Quantity: </p>
                    <input type='number' value={this.state.quantity} id="productquantity" onChange={this.quantityChangeHandler}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Price: </p>
                    <input type='number' id="productprice" onChange={this.priceChangeHandler}></input>
                    {this.state.nameError}
                    <br></br> <br></br>

                    <p>Product Image: </p>
                    <input type="file" onChange={this.getImage} multiple accept='image/*' />
                    <br></br><br></br><br></br>

                    <button type="submit"  style={{color:' black', borderRadius:'20px',border: '2px solid grey',padding: '8px 30px'}} onClick={this.editProduct} disabled={this.state.buttonStatus}>Edit Product</button>
                    <br></br>
                    </form>
                    </div>
                    { this.state.isSuccess && <h3>Product edited successfully</h3>}
                    </div>
                    </div>
       );
    }
}
 
export default EditProduct;