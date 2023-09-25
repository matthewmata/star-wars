import loadingLogo from "../../images/loading-logo.png";

const Loading = () => {
  return (
    <div className="loading-logo center">
      <img className="rotate" src={loadingLogo} alt="Loading..."></img>
      <div className="center column loading-text">
        <span>Loading</span>
        <span>Cast...</span>
      </div>
    </div>
  );
};

export default Loading;
