import './App.css'
import HomePage from './pages/HomePage'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className='App'>
      <HomePage />
    </div>
  )
}

/** HomePage
 
 * Search bar: Search for moviae actors
 * after 3 letters fetch  data
 * use useEffect to fetch the data
 * list actors
 * onclick the link => movie page
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

export default App
