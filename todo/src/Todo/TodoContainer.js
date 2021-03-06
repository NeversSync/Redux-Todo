import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import TodoList from './TodoList';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const TodoListContainer = connect( 
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;