import React from 'react';
import ReactDOM from 'react-dom';

const TodoItem = (props) => <li onClick={ !props.item.done && props.onClick}>{props.item.text} {props.item.done ? 'done': 'not yet done'}</li>

class TodoList extends React.Component {
  render() {
    console.log(JSON.stringify(this.props));
    const { items, onClick } = this.props;
    return (<ul onClick={onClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item, event) {
    // Write your code here
    console.log('hi');
  }
}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items}/>, rootElement);