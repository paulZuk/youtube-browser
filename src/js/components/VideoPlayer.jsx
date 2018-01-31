import React, { Component } from 'react';

export default class VideoPlayer extends Component {
    render() {
        return(
            <div className="col-sm-8">
                <iframe 
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" 
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