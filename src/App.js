import logo from './logo.svg';
import './App.css';
import {NumberProvider} from "./NumberProvider";
import {lazy, Suspense} from "react";

const Inc = lazy(() => import('./Inc'));
const Number = lazy(() => import('./Number'));
const Dec = lazy(() => import('./Dec'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NumberProvider>
              <Suspense fallback={<div>Loading</div>}>
                  <Inc></Inc>
                  <Number></Number>
                  <Dec></Dec>
              </Suspense>
          </NumberProvider>
      </header>
    </div>
  );
}

export default App;
