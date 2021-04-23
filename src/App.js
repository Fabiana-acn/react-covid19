import './App.css';
//import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detalhe from './pages/Detalhe';
import { Layout } from 'antd';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Layout.Content
            style={{ padding: 40, background: '#ccc', margin: 40 }}
          >
            <Route exact path="/">
              <Home />
            </Route>
            Selecione o País
            <Route exact path="/:pais/:tipo">
              <Detalhe />
            </Route>
          </Layout.Content>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
