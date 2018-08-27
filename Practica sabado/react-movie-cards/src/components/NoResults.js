import React from 'react';

const NoResults = () => {
  return (
    <div className="d-flex flex-row">      
      <div className="col-12">
        <div className="alert alert-secondary" role="alert">
          No encontramos resultados :(
        </div>
      </div>
    </div>
  );
}

export default NoResults;