import React from 'react'
import { Card, Icon } from 'semantic-ui-react';

export default function EpisodeCard(props) {
  const {name, episode, air_date} = props.episode;
  return (
    <Card>
      <Card.Content header={name} />
      <Card.Content description={episode} />
      <Card.Content extra>
        <Icon name='user' />
          {air_date}
      </Card.Content>
    </Card>
  )
}