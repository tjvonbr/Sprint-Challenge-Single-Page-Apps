import React from 'react'
import { Card, Icon } from 'semantic-ui-react';

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content header={props.episode.name} />
      <Card.Content description={props.episode.episode} />
      <Card.Content extra>
        <Icon name='user' />
          {props.episode.air_date}
      </Card.Content>
    </Card>
  )
}