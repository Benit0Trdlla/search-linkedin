import './App.css'
import { useState } from 'react'

const stringsSearch = ['Hiring Programador', 'Hiring Desarrollador', 'Desarrollador', 'Desarrollador Junior', 'Desarrollador Frontend', 'Frontend Argentina', 'Programador']

function App() {
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
      <h1 className='text-white text-center'>Mis búsquedas de LinkedIn</h1>
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
      <p className='text-white container fw-bold text-center' style={{ cursor: 'pointer' }} onClick={() => { navigator.clipboard.writeText('Desarrollador Frontend OR Buscamos desarrollador OR Desarrollador Argentina OR Oportunidad laboral Desarrollador') }}>"Desarrollador Frontend" OR "Buscamos desarrollador" OR "Desarrollador Argentina" OR "Oportunidad laboral Desarrollador"</p>
    </>
  )
}

export default App
