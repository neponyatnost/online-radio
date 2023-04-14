import { FC } from 'react'
import volumeOff from './img/volumeOff.png'

interface VolumeOnProps {}

const VolumeOff: FC<VolumeOnProps> = () => {
  return <img src={volumeOff} alt='Play' width={45} height={45} />
}

export default VolumeOff
