import './App.css'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/movie/:id' component={MoviePage} />
      </Router>
    </div>
  )
}
/** HomePage
 
 * Search bar: Search for movie actors
 * after 3 letters fetch  data
 * use useEffect to fetch the data
 * list actors
 * onclick the link => movie page
 * 
 *
 */

/** MoviePage
 * Back button
 *
 * h1 Movie Name
 * movie details
 *
 *
 */

//unsplash
//https://api.unsplash.com/photos/?client_id=wJrvi_TuEWBittaTukwYJcSXdfvEjdEZKvOs1bzKOCA

export default App
