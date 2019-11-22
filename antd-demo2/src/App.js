import React from 'react';
import Parent from "./components/props/Parent";
import TodoWrapper from "./components/ProviderConsumerContext/TodoWrapper";
import Eighteen from "./components/onRef/Eighteen";
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const App: React.FC = () => {
  const style1 = {
    padding: '4px 10px',
    margin: '5px',
    border: '1px solid blue',
    borderRadius: '5px'
  }

  function getConfirmation (message, callback) {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
  }
  return (
    <div className='app'>
      <Router basename='/test' getUserConfirmation={getConfirmation}>
        <Link to='/' style={style1}>root</Link>
        <Link to='/hello/nnnnnn' style={style1}>hello</Link>
        <Link to='/parent' style={style1}>Parent</Link>
        <Link to='/todowrapper' style={style1}>TodoWrapper</Link>
        <Link to='/onref' style={style1}>onRef</Link>
        <hr style={{height: '1px', width: '100%',margin: '15px 0', backgroundColor: '#ddd'}}/>
        <div>
          <Route path='/' exact render={() => {
            return <div>root page</div>
          }}/>
          <Route path='/hello/:name' exact render={({match, history}) => {
            return (<div>
              hello world
              <p>match.params：{match.params.name}</p>
              <button onClick={() => {
                history.push('/todowrapper')
              }}>to TodoWrapper</button>
            </div>)
          }}/>
          <Route path='/parent' component={Parent}/>
          <Route path='/todowrapper' component={TodoWrapper}/>
          <Route path='/onref' component={Eighteen}/>
        </div>
      </Router>
    </div>
  )
}
export default App;