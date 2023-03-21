import './App.css';
import { useState } from 'react';
import { StudentData } from './Components/StudentData';
import Student from './Components/Student';

function App() {
  const [data, setData] = useState(StudentData)
  
  return (
    <div className="App">
      {data.map(student => <Student info={student} />) }

    </div>
  );
}

export default App;