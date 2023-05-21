import './App.css'
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utills/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{

  path: '/',
  element:  <Body/>,
  children: [
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path: 'watch',
      element: <WatchPage/>
    }
  ]
}])
 
function App() {
  return (
    <Provider store ={store}> <div>

  <Head/>
  <RouterProvider router = {appRouter}/>

  
{/* 
Head
Body
SideBar
MenuItems
MainContainer
ButtonsList
VideoContainer
VideoCard


 */}


    </div></Provider>
  );
}

export default App;