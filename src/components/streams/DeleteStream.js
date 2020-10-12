import React, { useEffect } from "react";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import history from "../../utils/history";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../actions/index";

const DeleteStream = ({ deleteStream, fetchStream, stream, match }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  const actions = (
    <>
      <button
        onClick={() => deleteStream(stream.id)}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${stream.title}`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  DeleteStream
);
