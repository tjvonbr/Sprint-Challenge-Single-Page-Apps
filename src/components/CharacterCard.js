import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.char.image} alt='Show Character' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.char.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.char.species}</span>
        </Card.Meta>
        <Card.Description>
          {props.char.status}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )
}
