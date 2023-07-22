import { useState, useRef } from 'react'

function Angle(props) {
    const inputRef = useRef();
    const [state, setState] = useState(0);
  
    return (
      <div class="vertFlex">
        <p>{state}</p>
        <input type="range" class="slider"
          min={0}
          max={359}
          ref={inputRef}
          value={state}
          onChange={() => {
            props.set(inputRef.current.value)
            setState(inputRef.current.value)
          }}
        />
      </div>
    );
  }

export default function Override(props) {
    return(
      <div class="horiFlex">
        <Angle set={props.setRoll} />
        <Angle set={props.setPitch} />
        <Angle set={props.setYaw} />
      </div>
    );
}