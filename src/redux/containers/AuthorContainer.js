import React, { Component } from 'react';
import { connect } from 'react-redux';
import Author from '../../components/Author';
import getCommentsById from '../../api/actions/getCommentsById';
import getPostsProcess from './../thunks/getPostsProcess';

class AuthorContainer extends Component {
  componentDidMount() {
    const { id } = this.props.params;
    this.props.getCommentsById(id);
  }

  render() {
    const { author } = this.props;
    return (
      <div>
        <Author author={author} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAuthor: id => {
      if (typeof id === 'string') {
        dispatch(getPostsProcess(id));
      }
    }
  };
}

function mapStateToProps(state) {
  return {
    author: state.author
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);
