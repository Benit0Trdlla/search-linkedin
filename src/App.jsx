import './App.css'
import { useState } from 'react'

function App() {

  const stringsSearch = ['hiring programador', 'hiring desarrollador', 'desarrollador', 'desarrollador junior', 'desarrollador frontend', 'frontend argentina', 'programador']

  const [searchStates, setSearchStates] = useState(
    stringsSearch.map(() => [false, false, false])
  );

  const handleSearch = (index, columnIndex) => {
    const newSearchStates = [...searchStates];
    newSearchStates[index][columnIndex] = !newSearchStates[index][columnIndex];
    setSearchStates(newSearchStates);
  };


  return (
    <>
      <h1 className='text-white text-center'>Mis busquedas de Linkedin</h1>
      <div className='p-3 m-0 border-0 bd-example m-0 border-0'>

        <table className="table table-dark table-hover">
          {/* COLUMNAS */}
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">24</th>
              <th scope="col">24ll</th>
              <th scope="col">ll</th>
            </tr>
          </thead>
          {/* FILAS */}
          <tbody className='table-group-divider'>
            {stringsSearch.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item}</th>
                <td onClick={() => handleSearch(index, 0)}>
                  {searchStates[index][0] ? <i className="bi bi-x-lg bg-trasparent"></i> : null}
                </td>
                <td onClick={() => handleSearch(index, 1)}>{
                  searchStates[index][1] ? <i className="bi bi-x-lg bg-trasparent"></i> : null}
                </td>
                <td onClick={() => handleSearch(index, 2)}>
                  {searchStates[index][2] ? <i className="bi bi-x-lg bg-trasparent"></i> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
