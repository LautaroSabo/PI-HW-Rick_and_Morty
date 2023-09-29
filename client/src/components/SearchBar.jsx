import { useState } from "react";
import 'animate.css'

export default function SearchBar({onSearch}) {
   //console.log(props);
   const [id,setId] = useState('');

   const handleChange = (event) =>{
      //console.log(event)
      setId(event.target.value)
   }
   return (
      <div>
         
         <input className="inputNav" type='search' onChange={handleChange} value={id}/>
         <button className='buttonOnSearch'onClick={()=>{onSearch(id); setId('')}}>Agregar <i class="ph-bold ph-check"></i></button>
      </div>
   );
}
