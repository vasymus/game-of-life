import React, {Component} from 'react'


class ErrorBoundary extends Component {

    render() {
        let {children} = this.props
        // console.log('--- render error boundary')
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    }
    componentDidCatch(error, info) {
        console.log(error, info)
        // logErrorToMyService(error, info);
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
}

export default ErrorBoundary
