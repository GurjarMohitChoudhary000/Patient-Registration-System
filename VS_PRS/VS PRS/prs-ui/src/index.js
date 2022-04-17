import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Home from './cmp/Home';
import ValidatedLoginForm from "./ValidatedLoginForm";
import ErrorBoundary from "./ErrorBoundary";


function App() {
  return (
    <div className="App" style={{ backgroundColor: "#20b2aa" }}>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <ValidatedLoginForm />
      </ErrorBoundary> */}
      </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
