import React from 'react'
import play from './img/play.png'

interface PlayProps {}

const Play: React.FC<PlayProps> = () => {
  return <img src={play} alt='Play' width={50} height={50} />
}

export default Play
