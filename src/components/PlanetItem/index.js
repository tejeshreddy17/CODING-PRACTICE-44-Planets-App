// Write your code here
import {
  PlanetItemContainer,
  PlanetName,
  ImageSize,
  PlanetDescription,
} from './styledComponents'

const PlanetItem = props => {
  const {item} = props
  const {id, name, description, imageUrl} = item
  return (
    <PlanetItemContainer>
      <ImageSize src={imageUrl} alt={`planet ${name}`} />
      <PlanetName>{name}</PlanetName>
      <PlanetDescription>{description}</PlanetDescription>
    </PlanetItemContainer>
  )
}
export default PlanetItem
