import React, { Component } from "react";
//import { _debounce } from '../util/lodashUtil';

export class Search extends Component {
  constructor(props) {
    super(props);
    //concept similar to distinct until changed was not found in lodash. TO-DO
    //  this.performGenericSearchDelayed = _debounce(this.performGenericSearch, 300);
  }

  performGenericSearch = (searchKeyword) => {
    // this.props.performGenericSearch(searchKeyword);
  };

  render() {
    const { fullWidth = false } = this.props;

    return (
      <div className="input-group rounded w-25">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
    );
  }
}

export default Search;
