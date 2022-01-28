// Write your code here
import Slider from 'react-slick'

import {AppBackground, Heading} from './styledComponents'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <AppBackground data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem item={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </AppBackground>
  )
}

export default PlanetsSlider
