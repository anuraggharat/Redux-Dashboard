import React, { Component } from 'react'

export default class Posts extends Component {
    
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }

    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>this.setState({posts:data}))
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
