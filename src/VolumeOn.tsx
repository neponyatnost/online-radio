import { FC } from 'react'
import volumeOn from './img/volume.png'

interface VolumeOnProps {}

const VolumeOn: FC<VolumeOnProps> = () => {
  return <img src={volumeOn} alt='Play' width={45} height={45} />
}

export default VolumeOn
