import React from "react";
import styles from "./TodoItem.module.css";

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

class TodoItem extends React.Component {
  state = {
    editing: false,
  }
  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }
  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }

  render() {
    const { completed, id, title } = this.props.todo
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }



    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
        <input 
          type="checkbox"
          className={styles.checkbox}
          checked={completed} 
          onChange={() => this.props.handleChangeProps(id)}
        />        
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <button 
          onClick={() => this.props.deleteTodoProps(id)}>
          Delete
        </button>

        </div>
       <input 
        type="text"
        className={styles.textInput} 
        style={editMode} 
        value={title}
        onChange={e => {
          this.props.setUpdate(e.target.value, id)
        }}
        onKeyDown={this.handleUpdatedDone}
      /> 
      </li>
    )
  }
}

export default TodoItem