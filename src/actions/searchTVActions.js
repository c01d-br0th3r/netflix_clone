const searchTV = (term) => {
  return {
    type: "SEARCH_TV",
    term,
  };
};

const successSearchTV = (tvs) => {
  return {
    type: "SUCCESS_SEARCH_TV",
    tvs,
  };
};

const failSearchTV = (error) => {
  return {
    type: "FAIL_SEARCH_TV",
    error,
  };
};

export default { searchTV, successSearchTV, failSearchTV };
