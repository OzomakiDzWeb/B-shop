import  ReactDOM  from "react-dom";
const Lodding = () => {
  return ReactDOM.createPortal (
     <div className="absolute top-0 left-0 w-full min-h-screen bg-gray-lghit/40 flex items-center justify-center">
       <img className="h-10 w-10" src="/src/assets/loader.gif"/>
     </div>,
     document.getElementById('loding')
    
  )
}

export default Lodding