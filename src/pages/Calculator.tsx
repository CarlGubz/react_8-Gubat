import { useState } from "react";
import CalcButton from "../components/CalcButton";

//CALCULATOR LOGIC
export default function Calculator() {
  const [input, setInput] = useState("");
  const handleClick = (value: string) => {
    if (input === "Error" || input === "Infinity") { //If the input is "Error" or "Infinity", set the input to the clicked value.
      setInput(value);
    } else {
      // Check if the current input is the result and the clicked value is an operator
      if (/[-+*/]/.test(value) && /[0-9]/.test(input)) {
        // Check if last character of input is an operator
        if (/[-+*/]$/.test(input)) {
          setInput((prevInput) => prevInput.slice(0, -1) + value); // Replace the last operator
        } else {
          setInput((prevInput) => prevInput + value); //If the last character is not an operator, simply append the clicked operator.
        }
      } else if (input === "" && /[-+*/]/.test(value)) { //You cant type an operator when the input is empty

      } else if (input === "0" && value === "0") { //If the input is "0" and the clicked value is also "0", do nothing to prevent adding multiple zeros.
        // Do nothing (prevent adding multiple zeros)
      } else if (/[-+*/]0$/.test(input) && value === "0") { //If the last character is an operator and the clicked value is "0", do nothing to prevent adding zero after the operator.
        // Do nothing (prevent adding zero after operator)
      } else if (/[-+*/]0$/.test(input) && value !== "0") { //If the last character is an operator and the clicked value is not "0", replace the trailing zero with the clicked value.
        // Replace the trailing zero with the clicked value if it's not zero
        setInput((prevInput) => prevInput.slice(0, -1) + value);
      }  else if (input === "0") { //If the input is ONLY "0", replace it with the clicked value.
        setInput(value);
      } else { //Otherwise, simply append the clicked value to the input.
        setInput((prevInput) => prevInput + value);
      }
    }
  };

  const handleReset = () => {
    setInput("0");
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

//CALCULATOR PAGE
  return (
    <><div id="zenbu-calc">
        <div id="enter"> 
          <div className="calculator"> 
            <h1 id="digital-t-light">Calculator</h1>
            <div className="calculator-display-1"> 
                <div className="input" data-testid="display">
                </div>
              {input}
            </div>
            <div className="calculator-row">
              <CalcButton label="7" onClick={() => handleClick("7")} />
              <CalcButton label="8" onClick={() => handleClick("8")} />
              <CalcButton label="9" onClick={() => handleClick("9")} />
              <CalcButton label="÷" onClick={() => handleClick("/")} />
            </div> 
            <div className="calculator-row">
              <CalcButton label="4" onClick={() => handleClick("4")} />
              <CalcButton label="5" onClick={() => handleClick("5")} />
              <CalcButton label="6" onClick={() => handleClick("6")} />
              <CalcButton label="×" onClick={() => handleClick("*")} />
            </div> 
            <div className="calculator-row">
              <CalcButton label="1" onClick={() => handleClick("1")} />
              <CalcButton label="2" onClick={() => handleClick("2")} />
              <CalcButton label="3" onClick={() => handleClick("3")} />
              <CalcButton label="-" onClick={() => handleClick("-")} />
            </div> 
            <div className="calculator-row">
              <CalcButton label="C" onClick={handleReset} />
              <CalcButton label="0" onClick={() => handleClick("0")} />
              <CalcButton label="=" onClick={handleEvaluate} />
              <CalcButton label="+" onClick={() => handleClick("+")} />
            </div > 
              </div>
            </div>
          </div></>
  );
}