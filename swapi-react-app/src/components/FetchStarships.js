import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import { useSwapi } from '../context/Contexts'
import handlePromises from '../util/handlePromises'

const FetchShips = ({ starships }) => {
  const [error, setError] = useState(false)
  const [ships, setShips] = useState([])
  const { setCurrentShip } = useSwapi()

  //to get the :id from the string
  const idHandler = (string) => string.replace(/ /g, '_')

  useEffect(() => {
    handlePromises(starships, setError).then((res) => setShips(res))
  }, [starships])
  return (
    <>
      {error && <p>Something went wrong...</p>}
      {ships &&
        ships.map((ship) => (
          <div key={ship.model}>
            <Card.Meta
              as={Link}
              to={`/spaceships/${idHandler(ship.model)}`}
              onClick={() => setCurrentShip(ship)}
            >
              {ship.name}
            </Card.Meta>
          </div>
        ))}
    </>
  )
}

export default FetchShips
