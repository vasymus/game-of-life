import React from 'react'
import ErrorBoundary from "./ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <div className="wrapper">
                <h1>hello</h1>
            </div>
        </ErrorBoundary>
    );
}

export default App;
