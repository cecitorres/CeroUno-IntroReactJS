import React from 'react';

const Search = (props) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <div className="col-10 mx-auto">
        <form onSubmit={props.onSubmit} className="mb-5">
          <div className="form-group row">
            <div className="col-10">
              <input onChange={props.onUpdate} type="text" className="form-control" placeholder="Ingresa una palabra"/>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;