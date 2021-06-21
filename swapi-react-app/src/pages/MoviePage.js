import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Accordion, Icon } from 'semantic-ui-react'
import ErrorCard from '../components/ErrorCard'
import { useSwapi } from '../context/Contexts'
import FetchStarships from '../components/FetchStarships'

const MoviePage = () => {
  const { currentMovie } = useSwapi()
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    console.log(index, newIndex, activeIndex)

    setActiveIndex(newIndex)
  }

  return (
    <>
      {currentMovie ? (
        <Card className='movie-page-container'>
          <Card.Content>
            <Card.Header>{currentMovie.title}</Card.Header>
          </Card.Content>
          <Accordion as={Card.Content}>
            <Accordion.Title
              className='movie-item'
              active={activeIndex === 0}
              index={0}
              onClick={handleAccordionClick}
            >
              <Icon name='dropdown' />
              General Info
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <span className='movie-item '>Director: </span>
              {currentMovie.director}
            </Accordion.Content>
            <Accordion.Content active={activeIndex === 0}>
              <span className='movie-item'>Producer: </span>
              {currentMovie.producer}
            </Accordion.Content>

            <Accordion.Content active={activeIndex === 0}>
              <span className='movie-item'>Release Date: </span>
              {currentMovie.release_date}
            </Accordion.Content>
          </Accordion>

          <Accordion as={Card.Content}>
            <Accordion.Title
              className='movie-item'
              active={activeIndex === 1}
              index={1}
              onClick={handleAccordionClick}
            >
              <Icon name='dropdown' />
              Opening Crawl
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>{currentMovie.opening_crawl}</p>
            </Accordion.Content>
          </Accordion>

          <Accordion as={Card.Content}>
            <Accordion.Title
              className='movie-item'
              active={activeIndex === 2}
              index={2}
              onClick={handleAccordionClick}
            >
              <Icon name='dropdown' />
              Starships
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              {currentMovie.starships && (
                <FetchStarships starships={currentMovie.starships} />
              )}
            </Accordion.Content>
          </Accordion>
          <Card.Content textAlign='center' extra>
            <Button as={Link} to='/' basic color='blue'>
              Back
            </Button>
          </Card.Content>
        </Card>
      ) : (
        <ErrorCard />
      )}
    </>
  )
}

export default MoviePage
