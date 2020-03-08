# React Hook for RxJS

React ❤️  RxJS

## Install

Using npm

``` sh
npm install rxh
```

Using yarn

``` sh
yarn add rxh
```

## API

``` typescript
type InitialState<State> = State | (() => State);
function useObservable<State>(obs: Observable<State>): State | undefined;
function useObservable<State>(obs: Observable<State>, initialState: InitialState<State>): State;
function useObservable<State>(cb: () => Observable<State>): State | undefined;
function useObservable<State>(cb: () => Observable<State>, initialState: InitialState<State>): State;
```

## Usage

``` typescript
import React from 'react';
import ReactDOM from 'react-dom';
import {timer} from 'rxjs';
import {useObservable} from 'rxh';

const timerObservable = timer(0, 1000)

function CountDown() {
  const countDown = useObservable(timerObservable, 0)
  return (
    <div>{ countDown }</div>
  )
}

function App() {
  return (
    <div className="App">
      <CountDown />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
