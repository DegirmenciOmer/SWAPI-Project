import React from 'react'
import { Form, Icon, Button } from 'semantic-ui-react'

const SearchForm = ({ searchQuery, setSearchQuery }) => {
  function onChange(e) {
    setSearchQuery(e.target.value)
    if (!e.target.value) {
      setSearchQuery(undefined)
    }
    console.log(e.target.value)
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

          <Form.Button animated='vertical'>
            <Button.Content hidden>Search</Button.Content>
            <Button.Content visible>
              <Icon name='search' />
            </Button.Content>
          </Form.Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default SearchForm
