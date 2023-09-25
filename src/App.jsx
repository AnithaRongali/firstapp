import Counter from './Counter';
import './App.css';
import Todolist from './Todolist';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
     <h1>React JS Application by Anitha Rongali</h1>
     <Link to='/counter'>Counter</Link>&nbsp;
     <Link to='/todolist'>Todolist</Link>&nbsp;
     <Outlet></Outlet>
    </div>
  );
}

export default App;
