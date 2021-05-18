import React, { Component } from 'react'
import List from './List'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             textFieldValue:'',
             todoList:[]
        }
        this.changeValue=this.changeValue.bind(this);
    }
    changeValue=(event)=>{
        this.setState({
            textFieldValue:event.target.value
        });
    };
    updateList=(e)=>{
        e.preventDefault();
        const {textFieldValue,todoList}=this.state
        if(textFieldValue.trim().length>0){
            const newTodos=[...todoList,textFieldValue]
            this.setState({
                todoList:newTodos
            });
        }
        this.handleStateReset(e);

        
    };
    handleStateReset = (e) => {
        this.setState({
          textFieldValue:''
        });
      };
    
    render() {
        return (
        <form>
            <div>
                <h1>What's on your todo list today?</h1>
                <input type='text' placeholder="enter the todo work"  value={this.state.textFieldValue} onChange={this.changeValue}/>
                <button type='submit' onClick={this.updateList}> Add </button>
               <List listItems={this.state.todoList}/>
            </div>
        </form>
        )
    }
}

export default Form
