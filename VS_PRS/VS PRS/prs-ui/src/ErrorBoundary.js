import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError:false };
    }

    componentDidCatch(error,info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    render() {
      
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong...</h2>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }  

}
