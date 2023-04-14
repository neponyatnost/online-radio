import { RadioBrowserApi } from 'radio-browser-api'
import type { Station } from 'radio-browser-api/dist/types/constants'
import { FC, useEffect, useState } from 'react'
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import Pause from './Pause'
import Play from './Play'
import VolumeOff from './VolumeOff'
import VolumeOn from './VolumeOn'
import radio from './img/radio.png'

interface RadioProps {}

const Radio: FC<RadioProps> = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('all')
  const [stations, setStations] = useState<Station[]>()

  useEffect(() => {
    setupApi(currentFilter).then((data: Station[]) => {
      setStations(data)
    })
  }, [currentFilter])

  async function setupApi(stationFilter: string): Promise<Station[]> {
    const api = new RadioBrowserApi('Neponyatnost online radio')
    const stations = await api.searchStations({
      language: 'english',
      tag: stationFilter,
      limit: 30,
    })
    return stations
  }

  const filters = [
    'all',
    'classical',
    'country',
    'dance',
    'disco',
    'house',
    'jazz',
    'pop',
    'rap',
    'retro',
    'rock',
  ]

  // if (navigator.userAgent.toLowerCase().includes('ios'.toLowerCase())) {
  //   return <h1>This app will not work on your device</h1>
  // }

  return (
    <div className='radio'>
      <div className='filters'>
        {filters.map((filter) => (
          <span
            key={filter}
            className={currentFilter === filter ? 'filter selected' : 'filter'}
            onClick={() => setCurrentFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      {!stations && <h3 className='loader'>Loading stations...</h3>}
      <div className='stations'>
        {stations &&
          stations.map((station, index) => {
            return (
              <div className='station' key={station.name + index}>
                <div className='station-name'>
                  <img
                    src={station.favicon ? station.favicon : radio}
                    alt='Neponyatnost online radio'
                    width={100}
                    height={100}
                    className='radio-icon'
                  />
                  <div className='name'>{station.name}</div>
                </div>
                <H5AudioPlayer
                  src={station.urlResolved}
                  autoPlayAfterSrcChange={false}
                  showJumpControls={false}
                  layout='horizontal-reverse'
                  customProgressBarSection={[]}
                  customControlsSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.VOLUME_CONTROLS,
                  ]}
                  customIcons={{
                    play: <Play />,
                    pause: <Pause />,
                    volume: <VolumeOn />,
                    volumeMute: <VolumeOff />,
                  }}
                  className='player'
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Radio
