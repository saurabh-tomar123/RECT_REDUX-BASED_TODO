import { connect } from 'react-redux';

const MyComponent = ({ persistedData }) => {
  // Use the persisted data in your component
  return (
    <div>
      <h1>{persistedData.title}</h1>
      <p>{persistedData.description}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    persistedData: state.persistedReducer // the key of your persisted reducer in the rootReducer
  };
};

export default connect(mapStateToProps)(MyComponent);
