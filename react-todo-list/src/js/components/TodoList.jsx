import TodoItem from "./TodoItem";

export default function TodoList({todos, checkCallback, deleteCallback}) {

    // create array of TodoItem components for every single one of the passed todos
    const todoItems = todos.map((todo, idx) => {
        // create a new TodoItem and pass the corresponding todo object to it as well as the callbacks from the props (props-drilling)
        // you might use a UUID generator for the key prop (could be performance inefficient IMHO)
        return <TodoItem key={todo.taskDesc+idx} task={todo} checkCallback={checkCallback} deleteCallback={deleteCallback} />
    });

    return (
        <ul className="todo-list">
            {todoItems}
        </ul>
    );
}