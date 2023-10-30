import { useState } from 'react'
import './App.css'

function ColorSwitcher() {
  const [displayColor, setDisplayColor] = useState('white');
  const turningRed = () => {
    setDisplayColor("Red")
  }
  const turningBlue = () => {
    setDisplayColor("Blue")
  }
  const turningGreen = () => {
    setDisplayColor("Green")
  }
  const reset = () => {
    setDisplayColor("White")
  }

  return (
    <div>
      <div className="bigContainer">
      <div className="containers">
      <Button className="first" text="Red" onClick={turningRed} />
      <Button className="second" text="Blue" onClick={turningBlue} />
      <Button className="third" text="Green" onClick={turningGreen} />
      <Button className="reset" text="Reset" onClick={reset} />
      </div>
      </div>

      <div className="">
        <div className="display" style={{ backgroundColor: displayColor, width: '200px', height: '200px', marginTop: '20px' }}>
        Display Area
        </div>
      </div>
    </div>
  );
}

interface ButtonProps {
  className: string;
  text: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return <button className={props.className} onClick={props.onClick}>{props.text}</button>
}




export default ColorSwitcher
