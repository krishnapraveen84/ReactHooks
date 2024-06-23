import './App.css'
import Profile from './components/Profile';
import Footer from './components/Footer';
import NewCounter from './components/NewCounter'
import Counter from './components/Counter';
import useLocalStorageHook from './components/CustomHook';

const App = () => {
  const [name, setName] = useLocalStorageHook("username", "");
  const [id, setId] = useLocalStorageHook("id", "");

  return(
    <div className='main-container'>
      <h1 className='heading'>React Hooks: </h1>
      <Counter />
      <NewCounter />
      <Profile />
      <Footer />
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello! {name}</p>
      
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <p>Your ID : {id}</p>
    </div>
  )
}

export default App;
 