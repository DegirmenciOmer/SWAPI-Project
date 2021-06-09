import React from 'react'
import { Form, Icon } from 'semantic-ui-react'

const SearchForm = ({ searchQuery, setSearchQuery }) => {
  function onChange(e) {
    setSearchQuery(e.target.value)
  }
  function onSearch() {}
  return (
    <>
      <Form onSubmit={onSearch}>
        <Form.Group>
          <Form.Input
            placeholder='Search for movie actors'
            name='name'
            value={searchQuery}
            onChange={onChange}
          />
          <Form.Button
            content={<Icon name='search' inverted circular link />}
          />
        </Form.Group>
      </Form>
    </>
  )
}

export default SearchForm
