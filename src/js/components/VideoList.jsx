import React, { Component } from 'react';
import VideoItem from './VideoItem.jsx';

export default class VideoList extends Component {
    render() {
        const { data } = this.props;
        console.log(data);
        
        return (
            <ul className="col-md-4 list-group">
                {
                    data.map(video => {
                        return (
                            <VideoItem 
                                key={video.etag} 
                                imageUrl={video.snippet.thumbnails.medium.url}
                                title={video.snippet.title}
                                description={video.snippet.description}
                                videoId={video.id.videoId}
                                onClickItem={this.props.onClickItem}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}