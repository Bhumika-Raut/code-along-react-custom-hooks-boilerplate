
import './App.css'
import useStorage from './hooks/useStorage';


function App() {
  const {setStorage} = useStorage()

  return (
    <>
      <input type='text' placeholder='Enter Data' onChange={(e)=>setStorage(e.target.value)}/>
    </>
  )
}

export default App
