import './App.css';
import Mainsection from './Components/Mainsection';
import Navbar from './Components/Navbar';
import data from './data';

function App() {
  const Mainsections=data.map(items=>{
    return (<Mainsection {...items}/>)
  })
  return (
    <div>
        <Navbar/>
        {Mainsections}
    </div>
  );
}

export default App;
