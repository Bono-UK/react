function Todo({ todo, removeTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <div className={{ "item-text strike" : "item-text"}} onClick={() => toggleTask(todo.id)}>
        {todo.task}
      </div>
      <div className="item-delete" onClick={() =>removeTask(todo.id)}>
        X
      </div>
    </div>
  )
}


export default Todo;
