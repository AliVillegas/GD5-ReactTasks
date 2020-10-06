import React, { useState,useEffect } from 'react'
import TasksIndex from './Index'
import axios from 'axios'
const TaskBar = () => {
    const [tasks,setTasks] = useState([
        {description: '', status:''},
    ])

    useEffect(() => {
        
    }, []);
    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark  mb-5">
        <a className="navbar-brand" href="/">TODO List GD #4 Ali Villegas</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        </nav>
        </div>
    )
    /*
    return (
        
        <div >

            <h1 className="text-center">Tasks with React</h1>
            <div className="container">
            <div className="row">
                <div className="col-lg-12" >
                <form className="form-inline" >
                    <div className="input-group w-100">
                    <input id="task_description" type="text" name="description" placeholder="I have to..." className="form-control"/>
                    <div className="input-group-append">
                        <input type="button" onClick={(e) => createTask(document.getElementById("task_description").value)}  value="Add" className="btn btn-primary"/>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        
    )
    */

    function createTask(description){
        axios.post(`http://localhost:3001/createTask/`, {
            description: description,
        }).then(() => {
            axios("http://localhost:3001/allTasks")
            .then((result) => {
                console.log(result)
            setTasks(result.data);
            })
            .catch((error) => {
            console.log('There was an error: ', error);
            });
        })
        
    };
}
export default TaskBar