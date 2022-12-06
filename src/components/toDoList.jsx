import React, { Component } from 'react';
import '../Todolist.css'

class ToDoList extends Component {
    state={
        value:'',
        list:[],
        checktf:[],
        textchektf:[]

    }
    
    render() {
        return (
            <div className="d-flex p-2">
                   
                    <button className="btn btn-primary" onClick={()=>this.addTask()}>Add task</button>
                    <input className="form-control" onChange={(e)=>this.changeVal(e)} value={this.state.value} type="text"  />
                    
                <div className="p-3 mb-2 bg-warning text-dark me-auto p-2 border rounded">
                <label className={this.state.checktf[this.state.list.length]} htmlFor="">To-do list:</label>
                {this.state.list.map(task=><div><input  type="checkbox" name="" id={this.state.list.length}  checked={this.state.checktf[this.state.list.length-1]}/><label htmlFor=""> {task} </label></div>)}

                </div>
            </div>
        );
    }
    addTask=()=>{
        
    this.state.list=this.state.list.concat([this.state.value]);
    this.state.checktf=this.state.checktf.concat(['false']);
    this.state.value=this.setState({value:''});
    this.setState({list:this.state.list});
    


    }
     changeVal=(e)=>
     this.state.value=this.setState({value:e.target.value});

     cahngetext=(e)=>{
       
        let x=e.target.id-1;
        this.state.checktf=this.setState({checktf: this.state.checktf[x]='true'})
        

     }
    //  doeschecked=(task)=>{
    //     if(this.state.checktf[task.id-1])

    //  }

}

export default ToDoList;
