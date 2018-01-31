import React, { Component } from 'react';


export default class VideoItem extends Component {
    render() {
        const { imageUrl, title, description } = this.props;
        return (
            <li 
                className="list-group-item"
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