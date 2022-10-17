import Info from "./Info";
import Tip from "./Tip";
import People from "./People";
import SecondPart from "./SecondPart";
import Header from "./Header";
function App() {
  return (
   
    

    <div className="body">
      
    <Header />
    <div className="container">
      
      <div className="firstPart">
      <Info/>
      <Tip/>
      <People/>
      </div>
     
      <SecondPart/>
      

    </div>

      </div>
    
    
  )
}

export default App;
