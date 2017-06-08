import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import TodoItem from './TodoItem';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const TodoItemContainer = connect( 
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);

export default TodoItemContainer;