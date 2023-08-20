import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ADD from './redux/action/Action';

function App() {
  const [inputValue, setInputValue] = useState([])
  const data = useSelector((store) => store.Rootreducer.listReducer.List)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ADD(inputValue))
    setInputValue([])
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={inputValue} onChange={handleChange} /><br />
          <button>ADD</button>
        </form>
      </div>
      <div>
        {
          data.map((ele, ind) => <li key={ind}>{ele}</li>)
        }
      </div>
    </div>
  );
}

export default App;
