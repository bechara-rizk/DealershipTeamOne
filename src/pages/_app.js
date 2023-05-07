import '@/styles/main.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

const form = () =>{

  return(
      <form>
          <label htmlFor="name">Name</label>
              <input type="text" id="name" className="input"/>
          <button>Submit</button>
      </form>
  )
}

export default form 
/*
const App = () => {
  const handleClick = () => {
  };
  
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click me
    </div>
  );
};

export  */ 