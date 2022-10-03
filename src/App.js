import './App.css';
import React from 'react';
import axios from "axios";
import CustomGrid from './customGrid'

function App() {
  const [data,setData] = React.useState({});
  // const [date,setDate] = React.useState({});

  function getData() {
    axios.get('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json')
    .then(response => {
      setData(response);
    });
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        Eleicao 2022 - React Training - RodBalla
      </div>
      <div className="App-body">
        {data?.data?.cand?.length > 0 &&
          <CustomGrid allData={data?.data} />
        }
      </div>
    </div>
  );
}

export default App;
