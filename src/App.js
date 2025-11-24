import './App.css';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';



function App() {

const data = [
  {
    date: '21.11.25',
    weight: 400,
    pv: 2400,
    amt: 2400,
  },
];
    let test = {
        date: '21.11.25',
        weight: '100'
    }


  return (
  <div className="App">
    <div className='row'>
      <div className='col-lg-5'>
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
      <Line type="monotone" dataKey="weight" stroke="blue" strokeWidth={2} name="Вес(кг)" />
      <XAxis dataKey="name" />
      <YAxis width="auto" label={{ value: 'weight', position: 'insideLeft', angle: -90 }} />
      <Legend align="center" />
    </LineChart>
    </div>

        <div className="col-md-4">
            <h3 className='text-primary'>Добавить запись</h3>
            <h3>Вес</h3>
            <input type="number"></input>
            <div>
            <h3>Дата</h3>
            <input type="date"></input>
            </div>
            <button className='btn btn-primary btn-md mt-3' type="submit">Добавить</button>
        </div>

      </div>

    <div className='row'>


        <h2>История записей</h2>
            <div className='col-md-2'>
              <h3>Дата</h3>
              <h2>{test.date}</h2>
            </div>
            <div className='col-md-2'>
              <h3>Вес(кг)</h3>
              <h2>{test.weight}</h2>
            </div>


          </div>



          </div>
    
  );
}

export default App;
