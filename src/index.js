import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import rootStore from './store/rootStore';
import App from './views/App';
import environment from 'environment';

(async (window) => {
  const history = createBrowserHistory({
    basename: environment.route.baseRoute,
  });
  const rootEl = document.getElementById('root');
  const store = rootStore({}, history);

  const render = (Component, el) => {
    ReactDOM.render(
      <Provider store={store}>
        <Component history={history} />
      </Provider>,
      el
    );
  };

  render(App, rootEl);
})(window);
