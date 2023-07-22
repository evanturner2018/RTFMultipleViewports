'use client'

import axios from 'axios'
import { useState } from 'react'
import Window from './window'
import Override from './components/cameraOverride'

export default function Home(props) {
  const override = false;
  props.aspect = (window.innerWidth/2)/window.innerHeight;

  const [roll, setRoll] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [yaw, setYaw] = useState(0);
  const [rollOffset, setRollOffset] = useState(0);
  const [pitchOffset, setPitchOffset] = useState(0);
  const [yawOffset, setYawOffset] = useState(0);

  if(!override) {
    axios.get('http://192.168.1.234:8080').then((res) => {
      if(res.data['zero']) {
        setRollOffset(res.data['roll'])
        setPitchOffset(res.data['pitch'])
        setYawOffset(res.data['yaw'])
      }
      setRoll(-1*(res.data['roll']-rollOffset)%360) //
      setPitch(-1*(res.data['pitch']-pitchOffset)%360) //
      setYaw(-1*(res.data['yaw']-yawOffset)%360)
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="horiFlex full">
        <Window file="space.glb" roll={roll} pitch={pitch} yaw={yaw} {... props}/>
        <Window file="space copy.glb" roll={roll} pitch={pitch} yaw={yaw} {... props}/>
      </div>
      {Math.trunc(roll)+', '+Math.trunc(pitch)+', '+Math.trunc(yaw)}
      <Override setRoll={setRoll} setPitch={setPitch} setYaw={setYaw} />
    </div>
  )
}
// <Window file="space copy.glb" roll={roll} pitch={pitch} yaw={yaw} {... props}/>