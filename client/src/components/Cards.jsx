import './styles/Cards.css'
import Card from './Card';

export default function Cards({characters,onClose}) {
   //console.log(characters);
   return(
      <div id='cards'>
         {
            characters.map(({id,name,status,species,gender,origin,image}) =>{
               //console.log(id);
               return(
               <Card 
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
               />
               )
            })}
      </div>
      ) 
   
}

