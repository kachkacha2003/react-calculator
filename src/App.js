import Info from "./Info";
import Tip from "./Tip";
import People from "./People";
import SecondPart from "./SecondPart";
import Header from "./Header";
import { useState ,useEffect} from "react";
function App() {
  
  const [num, setNum] = useState("");
  const [tipNum, setTipNum] = useState("");
  const [peopleNum, setPeopleNum] = useState("");

  const[personCalculate,setPersonCalculate]=useState(0);
  const[tipCalculate,setTipCalculate]=useState(0);

  let calculateNumber=()=>{
    if(Number(num)>0  && Number(tipNum)>0 && Number(peopleNum)>0) {
      setPersonCalculate(((Number(num) * Number(tipNum))/100 +Number(num))/Number(peopleNum))
      setTipCalculate(((Number(num) * Number(tipNum))/100 /Number(peopleNum)))
    }else{
      setPersonCalculate(0)
      setTipCalculate(0)
      
    }
  }
  useEffect(()=>{
    calculateNumber()


  },[num,peopleNum,tipNum])

 
  let handleInfoProps = (event) => {
    const limit = 10;
    setNum(event.target.value.slice(0, limit));
  };
  let handleTipProps = (event) => {
    const limit = 5;
    setTipNum(event.target.value.slice(0, limit));
  };
  let handleButtonProps = (event) => {
    setTipNum(event.target.textContent.slice(0,-1));
    
  };
  let handlePeopleProps = (event) => {
    const limit = 10;
    
    setPeopleNum(event.target.value.slice(0, limit));
  };
  let handleDeleteProps = (event) => {
    setTipNum("");
    setNum("");
    setPeopleNum("");
    
  };
  
  

  return (
    <div className="body">
      <Header calculator={calculateNumber} />
      <div className="container">
        <div className="firstPart">
          <Info function={handleInfoProps} value={num}  calculator={calculateNumber} />
          <Tip function={handleTipProps} value={tipNum} click={handleButtonProps}  calculator={calculateNumber}/>
          <People function={handlePeopleProps} value={peopleNum}  calculator={calculateNumber} />
        </div>

        <SecondPart  delete={handleDeleteProps} personCalculate={personCalculate} tipCalculate={tipCalculate}/>
      </div>
    </div>
  );
}

export default App;
