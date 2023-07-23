import './Loader.css'

const Loader = () => {
    return (
      <div>
        <div className="loader">
          <p className="heading">Loading</p>
          <div className="loading">
            <div className="load"></div>
            <div className="load"></div>
            <div className="load"></div>
            <div className="load"></div>
          </div>
        </div>
      </div>
    );
};

export default Loader;