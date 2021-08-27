import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Switch from 'react-bootstrap/esm/Switch';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faAccessibleIcon, fab} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faEnvelopeOpen, faSearch, faHistory, faPowerOff, faUsers, faUser,
   faPlus, faMapMarker, faInfoCircle,faQuestionCircle,faUserMd,faCartPlus,
   faPhone,faPaperPlane,faEdit,faFileDownload,faArrowUp,faAddressBook,faLink, faEye, faEyeDropper, faEyeSlash,} from '@fortawesome/free-solid-svg-icons'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Register from './Register/Register';
import Login from './Login/Login';
require('./Apps.css')
library.add(fab, faEnvelope, faEnvelopeOpen, faSearch, faHistory, faPowerOff, 
  faUsers, faUser, faPlus, 
  faMapMarker,faInfoCircle,faQuestionCircle,faUserMd,faCartPlus,faPhone,
  faPaperPlane,faEdit,faFileDownload,faArrowUp,faAddressBook,faLink,faAccessibleIcon,faEye,faEyeSlash)
function Apps() {
  return (
    <div className="Apps">
      <Header />
       <BrowserRouter>
      <Switch>
    <Route path='/register' ><Register /></Route>
    <Route path='/login' ><Login /></Route>
    </Switch>
  </BrowserRouter>
  <Footer />
    </div>
  );
}

export default Apps;
