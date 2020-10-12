import React, { useEffect, useRef } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

const ShowStream = ({ stream, fetchStream, match }) => {
  const ref = useRef();

  let player;

  useEffect(() => {
    fetchStream(match.params.id);
    buildPlayer();
  }, [ref]);

  const buildPlayer = () => {
    if (player || !stream) {
      return;
    }
    player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${match.params.id}.flv`,
    });
    player.attachMediaElement(ref.current);
    player.load();
  };

  if (!stream) {
    return <div>loading</div>;
  }

  return (
    <div>
      <video ref={ref} style={{ width: "100%" }} controls={true} />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(ShowStream);
