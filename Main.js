import  { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Next from './Next';
import New from './New';
import App1 from './App1';
import Finish from './Finish';

function Main () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App1 />}>

                </Route>
                <Route path='/ne' element={<Next />}></Route>
               
               
            </Routes>
        </BrowserRouter>
    );
}

export default Main;