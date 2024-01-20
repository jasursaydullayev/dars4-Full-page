import { useState } from "react";

function App() {
  const [num, setNum] = useState([]);

  const handleClick = (e) => {
    const copyNum = [...num, e.target.textContent];
    setNum(copyNum);
  };
  const handleClearClick = () => {
    setNum(num.slice(0, num.length - 1));
  };

  return (
    <div className="container wrapper">
      <div className="uzb_flag text_place">
        <div className="hr"></div>
        <h1 className="h1">{num}</h1>
      </div>
      <div className="clav_place">
        <ul>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => {
            return (
              <li onClick={handleClick} key={num} className="li">
                {num}
              </li>
            );
          })}
          <div className="btn" onClick={handleClick}>
            0
          </div>
          <div onClick={handleClick} className="btn">+</div>
          <div onClick={handleClick} className="btn">-</div>
        </ul>
        <div className="bnt_place">
          <div onClick={handleClearClick} className="btn btn_del">
            DEL
          </div>
          <div onClick={handleClick} className="btn">X</div>
          <div onClick={handleClick} className="btn">/</div>
          <div className="btn btn_teng">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
