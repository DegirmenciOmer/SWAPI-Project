import './App.css'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import SpaceshipsPage from './pages/SpaceshipsPage'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SwapiProvider } from './context/Contexts'

function App() {
  return (
    <div className='App'>
      <Router>
        <SwapiProvider>
          <Route exact path='/' component={HomePage} />
          <Route path='/movies/:id' component={MoviePage} />
          <Route path='/spaceships/:id' component={SpaceshipsPage} />
        </SwapiProvider>
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
