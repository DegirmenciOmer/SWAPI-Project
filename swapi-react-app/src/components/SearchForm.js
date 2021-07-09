import React from 'react'
import { Form, Popup } from 'semantic-ui-react'

const SearchForm = ({ searchQuery, setSearchQuery }) => {
  function onChange(e) {
    setSearchQuery(e.target.value)
  }

  return (
    <Form>
      <Form.Group>
        <Popup
          position='bottom right'
          content={`Type at least 3 characters; e.g. 'owe', 'lar', 'ere', or other combinations...'`}
          trigger={
            <Form.Input
              placeholder='Search for movie actors'
              name='name'
              value={searchQuery}
              onChange={onChange}
              autoComplete='off'
            />
          }
        />
      </Form.Group>
    </Form>
  )
}

export default SearchForm
