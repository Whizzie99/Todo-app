import { List, Avatar, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';


const Todo = (props) => {
    return ( 
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo} secondary="dummy text here"/>
            </ListItem>
        </List>
    );
}

export default Todo;