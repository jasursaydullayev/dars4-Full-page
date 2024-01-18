import { useState } from "react"

function App() {
  const [num, setNum] = useState([])

  const handleClick = (e) => {
    const copyNum = [...num, e.target.textContent];
    setNum(copyNum)
  }
  const handleClearClick = () => {
    setNum([])
  }
  
  return (
    <div className="container wrapper">
      <div className="uzb_flag text_place">
      <div className="hr">
      </div>
      <h1 className="h1">{num}</h1>
      </div>
      <ul>
        {[1,2,3,4,5,6,7,8,9,0,"-"].map((num) => {
          return <li onClick={handleClick} key={num} className="li">
          {num}
          </li>
        })}
      <button onClick={handleClearClick} className="btn">C</button>
      </ul>
    </div>
  )
}

export default App