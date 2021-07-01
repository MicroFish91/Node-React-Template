import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [studentNames, setStudentNames] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    const apiCall = async () => {
      let records = await fetch('/api');
      let data = await records.json();

      setStudentNames(data.data);
    }

    apiCall();
  }, []);

  return (
    <>
      <h2>Home Page</h2>
      <ul>
        {studentNames.map((student, index) => {
          return <li key={index}>{student.name}</li>
        })}
      </ul>
    </>
  )
}

export default App;
