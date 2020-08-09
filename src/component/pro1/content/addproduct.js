import React from 'react';
import axios from 'axios';
class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            productid:'',
            productname:'',
            productcategory:'',
            productquantity:'',
            productprice:'',
            productimage:'',
            buttonStatus: false
        }
    }
    checkValidation=()=>{
       
        let nameerror = ''
        //let sinceerror = ''
        if(this.state.productname.includes('#')){
            console.log('name having #!');
            nameerror = 'name having invalid #'
        }
        if(this.state.productname.includes('$')){
            console.log('name having $!');
            nameerror = 'name having invalid $'
        }
        //check for other conditions!
        if(nameerror){
            console.log('set state for nameError');
            this.setState({
                 nameError: nameerror,
                 buttonStatus: true
             })
            
            return false
        }
 
        this.setState({
            nameError:'',
            buttonStatus:false
         })
        return true
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
        this.checkValidation()
        this.setState({productname: event.target.value})
        this.checkValidation()

        }

        getCategory=(event)=>{
        
            console.log(event)
            console.log(event.target)
            console.log(event.target.value)
            this.checkValidation()
            this.setState({productcategory: event.target.value})
            this.checkValidation()
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
                    getImage=(event)=>{
                        console.log(event);
                        console.log(event.target);
                        console.log(event.target.value);
                        console.log(event.target.value.substr(12));
                        this.setState({productimage: event.target.value.substr(12)})
                    }


        addProduct=()=>{
            console.log('Add friend via axios and post')
            let productRequestBody = {
                "id":this.state.productid,
                "Product_Name": this.state.productname,
                "Product_Category": this.state.productcategory,
                "Product_Quantity":this.state.productquantity,
                "Product_Price":this.state.productprice,
                "Product_Image":this.state.productimage
                
            }
            axios.post('http://localhost:3000/allproducts', productRequestBody)
                    .then(response=>{
                        console.log(response);
                        this.props.history.push('/products')
                    }, error=>{
                        console.error(error);
                    })
        }


    render() { 
      
        
        return (
            <div className="c2" style={{width:'30%',align:'center',backgroundColor: 'lightblue', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '30px 30% 0 35%'}}>
                <h3>Add New Product</h3>
                <form>
               
                   

                    <p>Product Id: </p>
                    <input type='text' id="productname" onChange={this.getId}></input>
                    {this.state.nameError}
                    <br></br>

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

                    <p>Product Image: </p>
                    <input type="file" onChange={this.getImage} multiple accept='image/*' />
                    <br></br><br></br>
                    <button type="button" onClick={this.addProduct} disabled={this.state.buttonStatus}>Add Product</button>
                    <br></br>
                    
                    
                </form>
            </div>
          );
    }
}
 
export default AddProduct;