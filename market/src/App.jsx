import SearchAppBar from './AppBar'
import VariantButtonGroup from './Categories'
import Products from './Products'
import BasicLineChart from './Charts'
import './App.css'

function App() {
 

  return (
    <>
      <SearchAppBar/>
      <VariantButtonGroup />
      <Products />
       <h4 className='text'>This is growth of our delivary servises</h4>
      <BasicLineChart/>
    </>
  )
}

export default App
