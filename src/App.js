import './App.css';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { useState } from 'react';



function App() {


  let [weight, setWeight] = useState('')
  let [date, setDate] = useState('')
  let [data, setData] = useState([])

  const handleChange = event => {
    setWeight(event.target.value);
  };
  const handleChangeDate = event => {
    setDate(event.target.value)
    }

  const addWeight = event => {
    let oldData = data
    console.log(oldData)
    setData(oldData => [...oldData, {
      name: date,
      uv: weight,
      pv: 240,
      amt: 2400
    }])
    console.log(data)
  }




  return (
  <div className="App">
    <div className='row'>
      <div className='col-lg-6'>
     <LineChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="blue" strokeWidth={2} name="Вес(кг)" />
      <XAxis dataKey="name" />
      <YAxis width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
      <Legend align="center" />
    </LineChart>
    </div>

        <div className="col-md-4">
            <h3 className='text-primary'>Добавить запись</h3>
            <h3>Вес</h3>
            <input onChange={handleChange} type="number"></input>
            <div>
            <h3>Дата</h3>
            <input onChange={handleChangeDate} type="date"></input>
            </div>
            <button className='btn btn-primary btn-md mt-3' onClick={addWeight} type="submit">Добавить</button>
        </div>

      </div>

  <h2>История записей</h2>
  <table className='table table-bordered'>
    <thead>
      <tr>
        <th>Дата</th>
        <th>Вес</th>
      </tr>
    </thead>
    <tbody>
      {(() => {
        let history = []
        for (let a = 0; a < data.length; a++) {
          history.push(
            <tr key={a}>
              <td>{data[a].name}</td>
              <td>{data[a].uv}</td>
            </tr>
          );
        }
        return history;
      })()}
    </tbody>
  </table>



          </div>
    
  );
}

export default App;
