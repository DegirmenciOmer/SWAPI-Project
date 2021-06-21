import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon } from 'semantic-ui-react'
import ErrorCard from '../components/ErrorCard'
import { useSwapi } from '../context/Contexts'
import { useHistory } from 'react-router-dom'

const SpaceshipsPage = () => {
  const { currentShip } = useSwapi()
  const history = useHistory()
  const goToPreviousPath = () => {
    history.goBack()
  }

  console.log(new Date(currentShip.created).toUTCString())

  return (
    <>
      {currentShip ? (
        <Card className='movie-page-container'>
          <Card.Content>
            <Card.Header>{currentShip.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <span className='movie-item '>Cargo Capacity: </span>
              {currentShip.cargo_capacity}
            </Card.Description>
            <Card.Description>
              <span className='movie-item'>Consumables: </span>
              {currentShip.consumables}
            </Card.Description>

            <Card.Description>
              <span className='movie-item'>Created: </span>
              {new Date(currentShip.created).toUTCString()}
            </Card.Description>
            <Card.Description>
              <span className='movie-item'>Max Atmosphering Speed: </span>
              {currentShip.max_atmosphering_speed}
            </Card.Description>
            <Card.Description>
              <span className='movie-item'>Model: </span> {currentShip.model}
            </Card.Description>
            <Card.Description>
              <span className='movie-item'>Passengers: </span>
              {currentShip.passengers}
            </Card.Description>
          </Card.Content>

          <Card.Content textAlign='center' extra>
            <Button.Group>
              <Button
                animated
                onClick={goToPreviousPath}
                className='ui circular icon button'
                color='blue'
                inverted
              >
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                  <Icon className='angle left icon' />
                </Button.Content>
              </Button>
              <Button
                animated
                inverted
                as={Link}
                to='/'
                color='red'
                className='ui circular icon button'
              >
                <Button.Content visible>Close</Button.Content>
                <Button.Content hidden>
                  <Icon className='close icon' />
                </Button.Content>
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      ) : (
        <ErrorCard />
      )}
    </>
  )
}

export default SpaceshipsPage
