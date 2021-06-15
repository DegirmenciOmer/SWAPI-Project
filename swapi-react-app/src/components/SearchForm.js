import React from 'react'
import { Form } from 'semantic-ui-react'

const SearchForm = ({ searchQuery, setSearchQuery }) => {
  function onChange(e) {
    setSearchQuery(e.target.value)
  }

  return (
    <Form>
      <Form.Group>
        <Form.Input
          placeholder='Search for movie actors'
          name='name'
          value={searchQuery}
          onChange={onChange}
          autocomplete='off'
        />
      </Form.Group>
    </Form>
  )
}

export default SearchForm
