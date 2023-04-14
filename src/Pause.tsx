import { FC } from 'react'
import pause from './img/pause.png'

interface PauseProps {}

const Pause: FC<PauseProps> = (props) => {
  return <img src={pause} alt='Pause' width={50} height={50} />
}

export default Pause
