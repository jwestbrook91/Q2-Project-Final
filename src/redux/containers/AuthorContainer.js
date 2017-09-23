import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../components/User';
import { getCommentsById } from '../../api/actions/getCommentsById';

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
    getUser: id => {
      if (typeof id === 'string') {
        dispatch(requestUser(id));
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
