import React, { Component } from 'react';


export default class VideoItem extends Component {
    handleClick(link) {
        
        this.props.onClickItem(link)
    }

    render() {
        const { imageUrl, title, description, videoId } = this.props;
        
        return (
            <li 
                className="list-group-item"
                onClick={link => this.handleClick(videoId)}
                style={{cursor:'pointer'}}
            >
                <div className="d-flex justify-content-center flex-column">
                    <img src={imageUrl} />
                    <div>
                        {title}
                    </div>
                    <div>
                        {description}
                    </div>      
                </div>
            </li>
        )
    }
}