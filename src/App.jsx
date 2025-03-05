import './App.css'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState(false)

  const stringsSearch = ['hiring programador', 'hiring desarrollador', 'desarrollador', 'desarrollador junior', 'desarrollador frontend', 'frontend argentina', 'programador']
  const handleSearch = () => {
    alert('Busqueda realizada')
  }

  return (
    <>
      <h1 className='text-white text-center'>Mis busquedas de Linkedin</h1>
      <div className='p-3 m-0 border-0 bd-example m-0 border-0'>

        <table class="table">
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
                <td onClick={handleSearch}>Mark</td>
                <td onClick={handleSearch}>Mark</td>
                <td onClick={handleSearch}><i class="bi bi-x-lg text-dark bg-white"></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
