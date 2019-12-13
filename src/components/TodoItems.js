import React, {Component} from "react"

class TodoItems extends Component {
    createTask = item => {
        return <li key={item.key} className="item"><i class="fas fa-times"  onClick={() => this.props.deleteItem(item.key)}></i>{item.text}</li>
    }
    render() {
            const todoEntries = this.props.entries
            const listItems = todoEntries.map(this.createTask)

          return <ul className="theList">{listItems}</ul>
        
    }
}

export default TodoItems