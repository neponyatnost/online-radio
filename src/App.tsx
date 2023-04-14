import './App.scss'
import Radio from './Radio'
import headphones from './img/headphones.svg'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='heading'>Neponyatnost online radio</h1>
        <img
          src={headphones}
          className='App-logo'
          alt='logo'
          width={'100'}
          height={'100'}
        />
        <h2>choose your favorite genre and enjoy</h2>
      </header>
      <Radio />
    </div>
  )
}

export default App
