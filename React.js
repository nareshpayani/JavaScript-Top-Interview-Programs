//============= connect ============


import { addTodo } from './actionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)


// ==================== useDispatch =======================

import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  )
}
// ==================== useSelector =======================

import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  return <div>{counter}</div>
}


// ==================== Child to Parent props pass =======================

import React, { Component } from 'react'

export class parent extends Component {

    render() {
        return (
            <div>
                <counter incrementCount={incrementCount} />
            </div>
        )
    }
}

export default script;


import React, { Component } from 'react'

export class child extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount =() =>{
        this.setState( prevState => {
            return { count: prevState.count+1}

    
        }, () => {
            this.props.incrementCount(this.state.count)
        })
    }

    render() {
       
        return (
            <div>
                <button onClick= {incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default script