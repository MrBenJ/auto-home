import React from 'react';

class WebApp extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = "WebApp";
    }

    render() {
        return (
            <div className="webapp">
                Hello world!
            </div>
        );

    }
}

export default WebApp;
