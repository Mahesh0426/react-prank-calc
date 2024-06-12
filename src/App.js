import "./App.css";
import DisplayBox from "./components/DisplayBox";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // display value is a state
  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isPrank, setISPrank] = useState(false);

  return (
    <div className="wrapper">
      <div className="calculator-container">
        <DisplayBox displayValue={displayValue} isPrank={isPrank} />

        <div className="flex-container">
          <Button
            buttonText="AC"
            className="text-color"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="C"
            className="text-color"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="%"
            className="text-color"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="/"
            className="text-color"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />
        </div>

        <div className="flex-container">
          <Button
            buttonText="9"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="8"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="7"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="*"
            className="text-color"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />
        </div>

        <div className="flex-container">
          <Button
            buttonText="6"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="5"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="4"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="-"
            className="text-color"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />
        </div>

        <div className="flex-container">
          <Button
            buttonText="3"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="2"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="1"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="+"
            className="text-color"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />
        </div>

        <div className="flex-container">
          <Button
            buttonText="0"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="."
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />

          <Button
            buttonText="="
            className="equal-button"
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            lastOperator={lastOperator}
            setLastOperator={setLastOperator}
            setISPrank={setISPrank}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
