import { auth } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";


const AuthButtons = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    // console.log('loading')
    return(
      <>
      <div className='authButtons'>
      <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
      <div className="dropdown" style={{'z-index':'-99'}}>
        <button className="dropbtn">Login <i className="arrowLogin down"></i>
        <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="/auth/Login">Login</a>
          <a href="/auth/Register">Sign Up</a>
          </div>
        </div>
      </div>
      </>
    );
  }
  return(
      <>
      <div className='authButtons'>
      <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
      <div className="dropdown">
        <button className="dropbtn">{!user ? "Login" : "Sign Out"} <i className="arrowLogin down"></i>
        <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          { !user ? <>
          <a href="/auth/Login">Login</a>
          <a href="/auth/Register">Sign Up</a></>:
          <>
                {user.uid === "4rplVi6gQfW4oZSvnXGf1D4z05x2" ? <a href="/dashboard/home">Admin</a>:null}
          <a href="" onClick={() => auth.signOut()}>Sign out</a>
              </>}
          </div>
        </div>
      </div>
      </>
    );
  };
export default AuthButtons;