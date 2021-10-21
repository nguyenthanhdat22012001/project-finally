import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';
import Slide from '@material-ui/core/Slide';
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider 
    maxSnack={3} 
    autoHideDuration={3000}
  //   anchorOrigin={{
  //     vertical: 'bottom',
  //     horizontal: 'left',
  // }}
  TransitionComponent={Slide}
  persist={false}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SnackbarProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
