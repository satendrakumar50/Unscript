import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'



const menuOptions = [
  {
    name: 'useCases',
    options: [
      { value: 'useCases1', label: 'Use cases' },
      { value: 'useCases2', label: 'Use cases-2' },
    ],
  },
  {
    name: 'features',
    options: [
      { value: 'features1', label: 'Features' },
      { value: 'features2', label: 'Features-2' },
    ],
  },
  {
    name: 'resources',
    options: [
      { value: 'resources1', label: 'Resources' },
      { value: 'resources2', label: 'Resources-2' },
    ],
  },
  {
    name: 'company',
    options: [
      { value: 'company1', label: 'Company' },
      { value: 'company2', label: 'Company-2' },
    ],
  },
];

function App() {
  return (
<>
<Header menuOptions={menuOptions}/>
<Body/>


</>
  );
}

export default App;
