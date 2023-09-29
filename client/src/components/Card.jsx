import { Link } from "react-router-dom";
import { addFav, removeFav } from "./redux/actions";
import { connect} from "react-redux";
import { useState, useEffect} from "react";
import './styles/Card.css'

 function Card({id,name,status,species,gender,origin,image,onClose, addFav, removeFav, myFavorites}) {

   const [ isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({id,name,status,species,gender,origin,image})
      }
   }

   useEffect(() => {
      //console.log(myFavorites);
      myFavorites.forEach((fav) => {
         //console.log(fav);
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   return (
      
         <div className="card3 animate__animated animate__backInDown ">
            <div className="buttonsCards">
            
            <button className="buttonFav" onClick={handleFavorite}>{isFav ? '❤️': '🤍' }</button>
            <button className="buttonClose" onClick={() => onClose(id)}><i class="ph ph-x"></i></button> 
            </div>
         
            <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
         <img className="imgCard" src={image} alt='' /> 
         </div>
      
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);