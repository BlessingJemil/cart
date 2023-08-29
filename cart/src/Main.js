import  { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Next from './Next';


function Main () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>

                </Route>
                <Route path='/ne' element={<Next />}></Route>
               
               
            </Routes>
        </BrowserRouter>
    );
}

export default Main;