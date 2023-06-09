import ReactPlayer from "react-player";

const VideoPlayer = ({ url, muted }) => {
  if (url.getVideoTracks()[0].enabled === true) {
    return (
      <ReactPlayer
        playing
        url={url}
        height="450px"
        width="640px"
        style={{
          marginLeft: "10%",
        }}
        muted={muted}
      />
    );
  } else {
    return (
      <>
        <ReactPlayer
          playing
          style={{
            backgroundColor: "black",
            marginLeft: "85px",
            marginRight: "-45px",
          }}
          url={undefined}
          width="600px"
          height="450px"
          muted={muted}
        />
      </>
    );
  }
};

export default VideoPlayer;
