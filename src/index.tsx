import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import reducer from "./store/reducer";
import { RecipeState, RecipeAction, DispatchType } from "./type";
import thunk from "redux-thunk";

const store: Store<RecipeState, RecipeAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
