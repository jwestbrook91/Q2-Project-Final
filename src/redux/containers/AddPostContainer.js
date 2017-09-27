import { compose } from 'recompose';
import { connect } from 'react-redux';

import AddPostComponent from '../../components/AddPostComponent';

import createPostProcess from '../thunks/createPostProcess';

// function mapStateToProps(state, ownProps) {
//   return {
//     RxItems: state.RxItems,
//     selected: state.selected,
//     selectedItemIds: state.selectedItemIds
//   };
// }

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: ({ title, description, author, count }) =>
      dispatch(
        createPostProcess({
          title,
          description,
          author,
          count
        })
      )
  };
}

const connectToStore = connect(null, mapDispatchToProps);

// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });

export default compose(connectToStore)(AddPostComponent);
