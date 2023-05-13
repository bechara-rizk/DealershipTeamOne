import { auth } from '../../firebase';

const AuthButtons = () => {
    return(
        <>
        <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
        <div className="dropdown">
          <button className="dropbtn">{!auth.currentUser ? "Login" : "Sign Out"} <i className="arrowLogin down"></i>
          <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            { !auth.currentUser ? <>
            <a href="/auth/Login">Login</a>
            <a href="/auth/Register">Sign Up</a></>:
            <>
                  {auth.currentUser.uid === "4rplVi6gQfW4oZSvnXGf1D4z05x2" ? <a href="/dashboard/home">Admin</a>:null}
            <a href="" onClick={() => auth.signOut}>Sign out</a>
                </>}
          </div>
   
        </div>
      </div>
        </>
    );
            };
export default AuthButtons;