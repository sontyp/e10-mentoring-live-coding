import '../scss/App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import RegisterForm from './components/RegisterForm';
// import LoginForm from './components/LoginForm';
import ProtectedStuff from './components/ProtectedStuff';
import PrivateRoute from './services/PrivateRoute';
import Counter from './components/Counter';

import useThemeStore from './hooks/useThemeStore';
import { themes } from './hooks/useThemeStore';

function App() {
  const theme = useThemeStore(themeStore => themeStore.theme);

  return (
    <div className={`App ${theme === themes.DARK ? 'dark' : ''}`}>
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-9'>Hallo Authentication!</h1>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>

              <Route path='/counter' element={<Counter />} />

              {/* Placeholder for whatever index component shown at the start of the site */}
              {/* <Route index element={<h3>Index</h3>}/> */}

              {/* Route for the login form component */}
              {/* <Route path='/login' element={<LoginForm />} /> */}

              {/* Route for the register form component */}
              {/* <Route path='/register' element={<RegisterForm />} /> */}

              <Route element={<PrivateRoute />}>
                <Route path='/protected' element={<ProtectedStuff />} />
              </Route>
            </Route>
            
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
