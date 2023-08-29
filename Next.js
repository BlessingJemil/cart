import { useLocation } from "react-router-dom";

import './Next.css'
import { useState } from "react";
function Next () {
    const location=useLocation();
    const {to} =location.state;
    const [to1,setto1]=useState(to);
    const [amount,setamount]=useState([]);

    
   
let v=0;
    to1.map((data,key)=>(
        
         v=v+(data.Quantity)*(data.Amount)
         

    ))
    
    let i=0;
    to1.map((data,key)=>(
        
        i=i+(data.Quantity)
        

   ))
    
    
    const remove=(e)=>{
        const y=[...to1]
        console.log(e.target.value)
        y.splice((e.target.value),1)
       setto1(y)
        console.log(to1)
       
        
    }
    
   
    const increment=(e1)=>{
        
        console.log(e1.target.value)
        let s1=(to1[e1.target.value].Quantity)+1;
        to1[e1.target.value].Quantity=s1;
        const g=[...to1]
        console.log(to1[e1.target.value].Quantity)
       setto1(g)

       
       
    //console.log(i1.target.value)
        
        //let op=((q)*to1[(i1.target.value)].Amount);
      //console.log(q)
       // to1[(i1.target.value)].Amount=op;
      // console.log(to1[(i1.target.value)].Amount)
    
    }
    const decrement=(s)=>{
        console.log(s.target.value)
        console.log(s.target.value)
        if(to1[s.target.value].Quantity !=0 && to1[s.target.value].Quantity !=1){
        let s1=(to1[s.target.value].Quantity)-1;
        to1[s.target.value].Quantity=s1;
        const g=[...to1]
        console.log(to1[s.target.value].Quantity)
       setto1(g)
       console.log(to1)
        }
    }
    return (
        <div className="page">
            <h1 className="head1">Cart Details</h1>
            <table className="tab">
                <tr>
                    <th>S/No</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                <tr>
                <td>{
                    to1.map((data,key)=>(
                        <p>{key+1}</p>
                    ))}
                    </td>
                    <td>{
                    to1.map((data,key)=>(
                        <p><img src={data.pic}></img></p>
                    ))}
                    </td>
                    <td>{
                    to1.map((data,key)=>(
                        <p>{data.Name}</p>
                    ))}
                    </td>
                    <td>
                    
                    {
                    to1.map((data,key)=>(
                        <p className="btn">
                            <button className="decrement-btn" onClick={decrement} value={key}>-</button>
                           <p className="quantity">{data.Quantity}</p>
                            <button className="increment-btn" onClick={increment} value={key}>+</button>
                          </p>                 
                       ))}
                        
                    </td>
                    <td>{
                    to1.map((data,key)=>(
                        <p>{data.Quantity*data.Amount}</p>
                       
                    ))}
                    </td>
                    <td>{
                    to1.map((data,key)=>(
                        <p><button onClick={remove} value={key}>Remove</button></p>
                    ))}
                    </td>
                </tr>
            </table>

            <h2 className="head2">Total Products in cart : {i}</h2>       
           <h1 className="head2">Total Amount : ₹ {v}</h1>
                
        </div>
    );
}

export default Next;