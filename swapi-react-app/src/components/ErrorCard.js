import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ErrorCard = ({ error }) => {
  const [open, setOpen] = useState(true)

  return (
    <>
      {open && (
        <Card className='movie-page-container'>
          <Card.Content>
            <Card.Header className='error' textAlign='center'>
              Something went wrong...
            </Card.Header>
          </Card.Content>
          {error && (
            <Card.Content textAlign='center' className='error'>
              Error: {error.message}
            </Card.Content>
          )}
          <Card.Content textAlign='center' extra>
            <Button
              onClick={() => {
                setOpen(false)
              }}
              as={Link}
              to='/'
              basic
              color='blue'
            >
              OK
            </Button>
          </Card.Content>
        </Card>
      )}
    </>
  )
}

export default ErrorCard
