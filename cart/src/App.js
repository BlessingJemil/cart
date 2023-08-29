import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './App.css';
import iphone14 from './images/iphone14promax.jpg';
import ipadpro from './images/ipadpro12.jpeg';
import imac from './images/mba.jpeg';
import imacst from './images/studio.jpeg';
import logo from './images/24.png';
import iphone14n from './images/iphone14.jpeg';
import iphone13 from './images/iphone13.jpeg';
import ipadair from './images/ipadair.jpeg';
import ipadmini from './images/ipadmini.jpeg';
import macbookair from './images/macbookpro.jpeg';
import maclit from './images/macmini.jpeg';
import macmini from './images/macminilit.jpeg';
import keyboard from './images/keyboard.jpeg';
import mouse from './images/mouse.jpeg';

function App() {
  const [arr,setarr]=useState([]);
  const [iph,setiph]=useState("productphone");
  const [iph1,setiph1]=useState("productipad");
  const [iph2,setiph2]=useState("productmacbook");
  const [iph3,setiph3]=useState("productimac");
  
  
  const phone={
      Name:'iPhone 14 Pro Max',
      pic:iphone14,
      Amount: (129900.00),
      Quantity: 1,
      category:'iPhone'
      
  }
  const phone1={
    Name:'Apple iPhone 14 (128 GB) - (Product) RED',
    pic:iphone14n,
    Amount: 68999,
    Quantity: 1,
    category:'iPhone'
    
}
const phone2={
  Name:'Apple iPhone 13 Mini (512GB) - Blue',
  pic:iphone13,
  Amount: 94900,
  Quantity: 1,
  category:'iPhone'
  
}
  const tb={
    Name:'iPad Pro 12.9-inch',
    pic:ipadpro,
    Amount: 138999.00,
    Quantity: 1,
    category:'iPad'
}
const tb1={
  Name:'Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Blue (5th Generation)',
  pic:ipadair,
  Amount: 54990,
  Quantity: 1,
  category:'iPad'

}
const tb2={
  Name:'Apple 2021 iPad Mini with A15 Bionic chip (Wi-Fi, 64GB) - Space Grey (6th Generation)',
  pic:ipadmini,
  Amount: 48470,
  Quantity: 1,
  category:'iPad'
}
const lp={
  Name:'Macbook pro 16.2-inch',
  pic:imac,
  Amount: 229990.00,
  Quantity: 1,
  category:'Macbook'
}
const lp1={
  Name:'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch)',
  pic:macbookair,
  Amount:107990,
  Quantity: 1,
  category:'Macbook'
}
const lp2={
  Name:'Apple 2022 MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch)',
  pic:maclit,
  Amount: 137990.00,
  Quantity: 1,
  category:'Macbook'
}
const pc={
  Name:'Apple Studio Display',
  pic:imacst,
  Amount: 229900.00,
  Quantity: 1,
  category:'Mac'
}
const pc1={
  Name:'Apple 2023 Mac Mini Desktop Computer M2 Pro chip ',
  pic:macmini,
  Amount: 121900.00,
  Quantity: 1,
  category:'Mac'
}
const pc2={
  Name:'Apple Magic Wireless Keyboard - US English - Silver',
  pic:keyboard,
  Amount: 9500.00,
  Quantity: 1,
  category:'Mac'
}
const pc3={
  Name:'Apple Magic Mouse',
  pic:mouse,
  Amount: 7500.00,
  Quantity: 1,
  category:'Mac'
}
 const addphone=()=>{
  let d= false;
  for(let d1=0;d1<arr.length;d1=d1+1){
    if(arr[d1].Name === phone.Name){
      d=true;
    }
  }
  console.log(d)
  
    if(!d){
    setarr(e=>[...e,phone]);
    console.log(arr);}
 } 

 const addphone1=()=>{
  let d1= false;
  for(let d11=0;d11<arr.length;d11=d11+1){
    if(arr[d11].Name === phone1.Name){
      d1=true;
    }
  }
  console.log(d1)
  
    if(!d1){
  
  setarr(e=>[...e,phone1]);
  console.log(arr);}
}

const addphone2=()=>{
  let d2=false;
  for(let d12=0;d12<arr.length;d12=d12+1){
    if(arr[d12].Name === phone2.Name){
      d2=true;
    }
  }
  console.log(d2)
  
    if(!d2){
  
  setarr(e=>[...e,phone2]);
  console.log(arr);}
  }

  //ipad

 const addipad=()=>{
  let dipad=false;
  for(let dip=0;dip<arr.length;dip=dip+1){
    if(arr[dip].Name === tb.Name){
      dipad=true;
    }
  }
  if(!dipad){
  setarr(e=>[...e,tb]);
  console.log(arr);
  }
} 
const addipad1=()=>{
  let dipad1=false;
  for(let dip1=0;dip1<arr.length;dip1=dip1+1){
    if(arr[dip1].Name === tb1.Name){
      dipad1=true;
    }
  }
  if(!dipad1){
  
  
  setarr(e=>[...e,tb1]);
  console.log(arr);
  }
} 
const addipad2=()=>{
  let dipad2=false;
  for(let dip2=0;dip2<arr.length;dip2=dip2+1){
    if(arr[dip2].Name === tb2.Name){
      dipad2=true;
    }
  }
  if(!dipad2){
 
  setarr(e=>[...e,tb2]);
  console.log(arr);
  }
} 
const addmacbook=()=>{
  let dmac=false;
  for(let dm=0;dm<arr.length;dm=dm+1){
    if(arr[dm].Name === lp.Name){
      dmac=true;
    }
  }
  if(!dmac){
  
  setarr(e=>[...e,lp]);
  console.log(arr);
  }
} 
const addmacbook1=()=>{
  let dmac1=false;
  for(let dm1=0;dm1<arr.length;dm1=dm1+1){
    if(arr[dm1].Name === lp1.Name){
      dmac1=true;
    }
  }
  if(!dmac1){
  
  setarr(e=>[...e,lp1]);
  console.log(arr);
  }
 
} 
const addmacbook2=()=>{
  let dmac2=false;
  for(let dm2=0;dm2<arr.length;dm2=dm2+1){
    if(arr[dm2].Name === lp2.Name){
      dmac2=true;
    }
  }
  if(!dmac2){
  
  
  
  setarr(e=>[...e,lp2]);
  console.log(arr);}
} 
const addmacs=()=>{
  let dpc=false;
  for(let dc=0;dc<arr.length;dc=dc+1){
    if(arr[dc].Name === pc.Name){
      dpc=true;
    }
  }
  if(!dpc){
  
  
  setarr(e=>[...e,pc]);
  console.log(arr);}
} 
const addmacs1=()=>{
  let dpc1=false;
  for(let dc1=0;dc1<arr.length;dc1=dc1+1){
    if(arr[dc1].Name === pc1.Name){
      dpc1=true;
    }
  }
  if(!dpc1){
  
  
  
  setarr(e=>[...e,pc1]);
  console.log(arr);}
}
const addmacs2=()=>{
  let dpc2=false;
  for(let dc2=0;dc2<arr.length;dc2=dc2+1){
    if(arr[dc2].Name === pc2.Name){
      dpc2=true;
    }
  }
  if(!dpc2){
  setarr(e=>[...e,pc2]);
  console.log(arr);}
}
const addmacs3=()=>{
  let dpc3=false;
  for(let dc3=0;dc3<arr.length;dc3=dc3+1){
    if(arr[dc3].Name === pc3.Name){
      dpc3=true;
    }
  }
  if(!dpc3){
  
  
  
  setarr(e=>[...e,pc3]);
  console.log(arr);}
}

const [sf,setsf]=useState('All');
console.log(sf)

const filter=(o)=>{
  
  console.log(o.target.value)
 
  setsf(o.target.value)
  if((o.target.value)=== "All"){
   
    setiph("productphone")
    setiph1("productipad")
    setiph2("productmacbook")
    setiph3("productimac")
   
  }
  else if((o.target.value)=== "iPhone"){
   
    setiph("productphone")
    setiph1("productipad0")
    setiph2("productmacbook0")
    setiph3("productimac0")
   
  }
  else if((o.target.value)=== "iPad"){
   
    setiph("productphone0")
    setiph1("productipad")
    setiph2("productmacbook0")
    setiph3("productimac0")
   
  }
  else if((o.target.value)=== "Macbook"){
   
    setiph("productphone0")
    setiph1("productipad0")
    setiph2("productmacbook")
    setiph3("productimac0")
   
  }
  else if((o.target.value)=== "Mac"){
   
    setiph("productphone0")
    setiph1("productipad0")
    setiph2("productmacbook0")
    setiph3("productimac")
   
  }
}



  return (
    <div >
      <div >
        <ul className='nav'>
          <li><img src={logo} className='logo'></img></li>
          <li className='nav-head'>Apple Premium Products</li>
          <Link to='/ne' state={{to:arr}} ><li ><FontAwesomeIcon icon={faCartShopping} className='proceed' /> </li></Link>
          <li className='no' >{arr.length}</li>
          
        </ul>
      </div>
      <div className='filter'>
        <label>Filter</label>
        <select onChange={filter} value={sf}>
        <option value='All'>All</option>
        <option value='iPhone'>iPhone</option>
        <option value='iPad'>iPad</option>
        <option value='Macbook'>Macbook</option>
        <option value='Mac'>Mac Setup</option>
        </select>
      </div>
    <div className="App">
      <div className={iph}>
       <img src={phone.pic} className="iphone"></img>
         <h1>{phone.Name}</h1>
         <h3>₹{phone.Amount}</h3>
         <p>Dynamic Island, a magical new way to interact <br></br>with iPhone</p>
         <button onClick={addphone}>Add to Cart</button>
      </div>  
      <div className={iph1}>
      <img src={tb.pic} className='ipad'></img>
        <h1>{tb.Name}</h1>
         <h3>₹{tb.Amount}</h3>
         <p>The ultimate iPad experience with the Most <br></br> Advanced Technology.</p>
         <button onClick={addipad}> Add to Cart</button>
      </div> 
      <div className={iph2}>
        <img src={lp.pic} className='imac'></img>
        <h1>{lp.Name}</h1>
         <h3>₹{lp.Amount}</h3>
         <p>Get more done faster with the blazing-fast Apple M2 chip</p>
         <button onClick={addmacbook}>Add to Cart</button>
      </div> 
      <div className={iph3}>
        <img src={pc.pic} className='mac'></img>
        <h2>Apple Studio Display <br></br>- Nano-Texture Glass - Tilt- and Height-Adjustable Stand</h2>
         <h3>₹{pc.Amount} (512GB SSD model) </h3> 
         <p>60.96 cm <br></br>(24-inch) 4.5K Retina display <br></br>Actual diagonal screen size is 59.69 cm (23.5 inches).
         </p>
         <button onClick={addmacs}>Add to Cart</button>
      </div> 
      <div className={iph}>
       <img src={phone1.pic} className='iphone'></img>
         <h1>{phone1.Name}</h1>
         <h3>₹{phone1.Amount}</h3>
         <p>A magical new way to interact <br></br>with iPhone</p>
         <button onClick={addphone1}>Add to Cart</button>
      </div>
      <div className={iph3}>
        <img src={pc1.pic} className='mac'></img>
        <h2>{pc1.Name}</h2>
         <h3>₹{pc1.Amount}  </h3> 
         <p>10‑core CPU and 16‑core GPU, 16GB Unified Memory, <br></br>512GB SSD Storage, Gigabit Ethernet. <br></br>Works with iPhone/iPad
         </p>
         <button onClick={addmacs1}>Add to Cart</button>
      </div> 
      <div className={iph1}>
      <img src={tb1.pic} className='ipad'></img>
        <h2>{tb1.Name}</h2>
         <h3>₹{tb1.Amount}</h3>
         <p>The ultimate iPad experience</p>
         <button onClick={addipad1}> Add to Cart</button>
      </div>
      <div className={iph}>
       <img src={phone2.pic} className='iphone'></img>
         <h1>{phone2.Name}</h1>
         <h3>₹{phone2.Amount}</h3>
         <p> New way to interact with iPhone</p>
         <button onClick={addphone2}>Add to Cart</button>
      </div>
      <div className={iph3}>
        <img src={pc2.pic} className='mac'></img>
        <h2>{pc2.Name}</h2>
         <h3>₹{pc2.Amount}  </h3> 
         <p>(for Mac with macOS 11.3 or Later, iPad Running iPad OS 14.5 or Later)
         </p>
         <button onClick={addmacs2}>Add to Cart</button>
      </div>
      <div className={iph2}>
        <img src={lp1.pic} className='imac'></img>
        <h2>{lp1.Name}</h2>
         <h3>₹{lp1.Amount}</h3>
         <p>Get more done faster with the blazing-fast Apple M2 chip</p>
         <button onClick={addmacbook1}>Add to Cart</button>
      </div> 
      <div className={iph1}>
      <img src={tb2.pic} className='ipad'></img>
        <h2>{tb2.Name}</h2>
         <h3>₹{tb2.Amount}</h3>
         <p>The ultimate iPad experience in affordable (mini) size</p>
         <button onClick={addipad2}> Add to Cart</button>
      </div>
      <div className={iph2}>
        <img src={lp2.pic} className='imac'></img>
        <h2>{lp2.Name}</h2>
         <h3>₹{lp2.Amount}</h3>
         <p>Get more done faster with the blazing-fast Apple </p>
         <button onClick={addmacbook2}>Add to Cart</button>
      </div> 
      <div className={iph3}>
        <img src={pc3.pic} className='macm'></img>
        <h1>{pc3.Name}</h1>
         <h3>₹{pc3.Amount}  </h3> 
         <p>(for Bluetooth-Enabled Mac with OS X 10.11 or Later, iPad with iPadOS 13.4 or Later)
         </p>
         <button onClick={addmacs3}>Add to Cart</button>
      </div>
      <p>{
       
        
        }</p>
      </div>    
    </div>
  );
}

export default App;

