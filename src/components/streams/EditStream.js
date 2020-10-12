import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";

const EditStream = ({ stream, match, fetchStream, editStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
    console.log("UseEffecitssä", stream);
  }, []);

  const handleSubmit = (title, description) => {
    editStream(match.params.id, title, description);
  };

  if (!stream) {
    return <div>Loading</div>;
  }
  return (
    <div>
      {console.log("renderissä", stream)}
      <h3>Edit a Stream</h3>
      <StreamForm
        handleSubmit={handleSubmit}
        title={stream.title}
        description={stream.description}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("mapstatetopropsissa");
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  EditStream
);
