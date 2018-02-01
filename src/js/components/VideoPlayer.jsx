import React, { Component } from 'react';

export default class VideoPlayer extends Component {
    render() {
        let link = `https://www.youtube.com/embed/${this.props.link !== "" ? this.props.link + '?autoplay=1' : 'dQw4w9WgXcQ?autoplay=0' }`
        return(
            <div className="col-sm-8">
                <iframe 
                    src={link}
                    style={{
                        width: '100%',
                        height: '80vh'
                    }}
                    frameBorder="0">
                </iframe>
                <div>

                </div>
                <div>
                    
                </div>
            </div> 
        ) 
    }
}