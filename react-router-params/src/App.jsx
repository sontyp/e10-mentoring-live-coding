import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Details from './components/Details';
import Search from './components/Search';

import './App.css';

export const studentData = [
  {
    id: 1,
    name: 'Peter Pan',
    age: 12,
    study: 'BA',
    degree: 'BSc'
  },
  {
    id: 2,
    name: 'Max Powers',
    age: 26,
    study: 'CS',
    degree: 'MSc'
  },
  {
    id: 3,
    name: 'Marry Poppins',
    age: 35,
    study: 'Philo',
    degree: 'BSc'
  },
  {
    id: 4,
    name: 'Mark Zuckerberg',
    age: 41,
    study: 'CS',
    degree: 'BSc'
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='details/:id' element={<Details />} />
            <Route path='search' element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
