import './components/styles/App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes , Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites'; 




//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
//const API_KEY = '921c53ed19ee.c07a3c34e20b05d4765f';

function App() {

   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate()
   const location = useLocation() 
   const currentPath = location.pathname

   // const EMAIL = 'ingreso@gmail.com'
   // const PASSWORD = 'contraseña'
   
   const URL = 'http://localhost:3001/rickandmorty/login/';
   
   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
       
         
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) =>{
      const characterFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(characterFiltered)
   }

   const login = async (userData) =>{
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
         
         
      } catch (error) {
         console.log(error.message);
      }
   }
   
   const logOut = () => {
      setAccess(false);
      navigate("/");
    };

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);


   return (
      <div id='App'>
         <div id='NavBar'>
         {
         location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />
         }
         </div>
         <div id='AllCards'>
         <Routes>
            {currentPath === '/' ? (
            <Route path='/' element={<Form onLogin={login} setAccess={setAccess}/>}/>
            ):(
            <>
            
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
               <Route path='/about' element={<About/>} />     
               <Route path='/detail/:id'  element={<Detail/>} />
               <Route path='/favorites' element={<Favorites/>}/>
            </>
            )}
         </Routes>
         </div>
      </div>
   );
}

/*

*/

export default App;
