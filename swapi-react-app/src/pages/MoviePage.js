import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header } from 'semantic-ui-react'

const MoviePage = () => {
  return (
    <Grid columns={3} className='ui centered'>
      <Grid.Row>
        <Header as={Link} to='/'>
          Back
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Header>The Movie Name</Header>
      </Grid.Row>{' '}
      <Grid.Row>Director:</Grid.Row>
      <Grid.Row>Producer:</Grid.Row>
      <Grid.Row>Release Date:</Grid.Row>
      <Grid.Row>
        Opening Crawl:
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetu
        </p>
      </Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MoviePage
