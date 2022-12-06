import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'

// 🙂
const Home = () => <h1>Home</h1>

const Search = () => <h1>Search</h1>



function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </div>
  )
}

export default App
