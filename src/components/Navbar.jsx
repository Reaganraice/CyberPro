import React,{useState} from 'react'
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';


const Navbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  return (
    <>
    <LoginModal open={openLoginModal} onClose={()=> setOpenLoginModal(false) } />
    <SignupModal open={openSignupModal} onClose={()=> setOpenSignupModal(false) } />
    <nav className="Navbar">
        <span className="nav-logo" >betway</span>
        <div>
        <button className="login-btn" onClick={() => setOpenLoginModal(true)} >Login</button>
        <button className="sign-btn" onClick={() => setOpenSignupModal(true)}>Sign up</button>
        </div>
       
       
      </nav>
      <div className="botton-nav">
          <nav className="nav-items">
            <a href="/sports">sports</a>
            <a href="/live&real">live & real</a>
            <a href="/casino">casino</a>
            <a href="/esports">esports</a>
            <a href="/vegas">vegas</a>
          </nav>
        </div>
      </>
    
  )
}

export default Navbar