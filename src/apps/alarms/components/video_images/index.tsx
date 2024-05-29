import { useState } from 'react';

import { Container } from 'apps/alarms/components/video_images/styles';
import { Maybe, PROPERTY_IMAGE, PROPERTY_VIDEO_FEED } from 'codegen/graphql';

const AlarmVideoImages = (props: {
  images: Maybe<PROPERTY_IMAGE[]> | undefined;
  videos: Maybe<PROPERTY_VIDEO_FEED[]> | undefined;
}) => {
  const [current, setCurrent] = useState(0);
  if (!props.images) return null;

  return (
    <Container>
      <img
        alt="alarm_image"
        src={props.images[current].url}
        style={{
          borderRadius: '0.5rem',
          objectFit: 'contain',
          width: '100%'
        }}
      />
    </Container>
  );
};

export default AlarmVideoImages;
