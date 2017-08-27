import React         from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  // a unique key must be assigned to each item, due to the way in which
  // React generates and detects changes in a list.
  return (
    <ul className="list-group col-md-4">
      {props.videos.map((video, i) => {
        return (
          <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />
        );
      })}
    </ul>
  );
};

export default VideoList;