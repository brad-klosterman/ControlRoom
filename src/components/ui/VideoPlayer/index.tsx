import ReactPlayer from 'react-player/lazy';

import { Flex } from 'components';

interface IVideoPlayer {
  url: string;
}

const VideoPlayer = ({ url }: IVideoPlayer) => {
  return (
    <Flex fluid>
      <ReactPlayer
        className="react-player"
        config={{
          youtube: { playerVars: { origin: 'https://www.youtube.com' } },
        }}
        height="100%"
        url={url}
        width="100%"
      />
    </Flex>
  );
};

export default VideoPlayer;
