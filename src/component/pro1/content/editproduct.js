import React from 'react';
import Axios from 'axios';
class EditProduct extends React.Component {
    state = { 
        pname:'',
        category:'',
        quantity:'',
        price:'',
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


    categoryChangeHandler=(e)=>{
       this.setState({category : e.target.value});
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
        e.preventDefault();
        console.log(this.state)
        let data={
            "Id":this.state.id,
            "Product_Name":this.state.pname,
            "Product_Category":this.state.category,
            "Product_Quantity":parseInt(this.state.quantity),
            "Product_Price":parseFloat(this.state.price)
            
            
        }

        Axios.put('http://localhost:3000/allproducts/'+this.state.id,data)
           .then(response=>{
               console.log(response);
               this.setState({isSuccess:true});
               this.props.history.push('/dashboard')
           },error=>{
               console.log(error);
           })
    }



   render() { 
       return (
   <div>
   
   <div className="c2" style={{width:'30%',align:'center',backgroundColor: 'lightblue', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '30px 30% 0 35%'}}>
   <h3>Edit Product</h3>
   <form>
               
   
                     <p>Product Id: </p>
                    <input type='text' id="productname" onChange={this.idChangeHandler}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Name: </p>
                    <input type='text' id="productname" onChange={this.nameChangeHandler}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Category: </p>
                    <input type='text' id="productcategory" onChange={this.categoryChangeHandler}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Quantity: </p>
                    <input type='number' id="productquantity" onChange={this.quantityChangeHandler}></input>
                    {this.state.nameError}
                    <br></br>

                    <p>Product Price: </p>
                    <input type='number' id="productprice" onChange={this.priceChangeHandler}></input>
                    {this.state.nameError}
                    <br></br> <br></br>

                    <p>Product Image: </p>
                    <input type="file" onChange={this.getImage} multiple accept='image/*' />
                    <br></br><br></br>

                    <button type="submit"  onClick={this.editProduct} disabled={this.state.buttonStatus}>Edit Product</button>
                    <br></br>
                    </form>
                    </div>
                    { this.state.isSuccess && <h3>Product edited successfully</h3>}
                    </div>
       );
    }
}
 
export default EditProduct;