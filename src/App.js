import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Switch from 'react-bootstrap/esm/Switch';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faAccessibleIcon, fab} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faEnvelopeOpen, faSearch, faHistory, faPowerOff, faUsers, faUser,
   faPlus, faMapMarker, faInfoCircle,faQuestionCircle,faUserMd,faCartPlus,
   faPhone,faPaperPlane,faEdit,faFileDownload,faArrowUp,faAddressBook,faLink, faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import Home from './components/parts/home/home'
import Header from './components/parts/header/header'
import Contact from './components/pages/contacts/contact'
import Contract from './components/pages/contract/contract'
import Hire from './components/pages/hire/hire'
import Cards from './components/assets/card/cards';
import Register from './components/pages/user/Register/Register';
import Login from './components/pages/user/Login/Login';
require('./App.css')
// const Logger = ()=>{
//   const userStatus = localStorage.getItem('user')
//   return userStatus ? <Home /> : <SignIn />
// }
library.add(fab, faEnvelope, faEnvelopeOpen, faSearch, faHistory, faPowerOff, 
  faUsers, faUser, faPlus, 
  faMapMarker,faInfoCircle,faQuestionCircle,faUserMd,faCartPlus,faPhone,
  faPaperPlane,faEdit,faFileDownload,faArrowUp,faAddressBook,faLink,faAccessibleIcon,faEye,faEyeSlash)
function App() {
  return (
    <div className="App">
      <Header />
       <BrowserRouter>
      <Switch>
      <Route path='/' exact ><Home /></Route>
    <Route path='/contact' ><Contact /></Route>
    <Route path='/contract' ><Contract /></Route>
    <Route path='/hire' ><Hire /></Route>
    <Route path='/projects' ><Cards /></Route>
    <Route path='/register' ><Register /></Route>
    <Route path='/login' ><Login /></Route>
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
