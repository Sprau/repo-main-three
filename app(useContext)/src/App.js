import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from './context/TodoContext'


function App() {
  return (
    <div>
      <TodoProvider>
        <AddForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
