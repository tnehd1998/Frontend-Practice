import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

const mapStateToProps = ({ sample, loading }) => ({
  post: sample.post,
  users: sample.users,
  loadingPost: loading["sample/GET_POST"],
  loadingUsers: loading["smaple/GET_USERS"],
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id)),
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
