class ApiTodo_placeholder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
              todos:[]
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    todos:json,
                })
            })
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
            .catch(error=>console.error('Erreur lors de la récupération des données:',error));
     }

    render(){
        return( <div className="container">
            <div className="col-lg-6 m-auto">
                    <h5 className="text-center mb-3">Listes des taches</h5>
                    <ul>
                       {this.state.todos.map(todo=>(
                        <li key={todo.id}>
                               {todo.title} {' '} 
                               {todo.completed ? (
                                   <i className="fa-solid fa-check" style={{ color: '#17d39b' }}></i>) : (
                                   <i className="fa-solid fa-xmark" style={{ color: '#e6053d' }}></i>)}

                        </li>
                       ))}
                    </ul>
            </div>
            </div>
        )
    }
}

ReactDOM.render(<ApiTodo_placeholder />, document.getElementById("root1"))