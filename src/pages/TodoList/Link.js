import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVisibilityFilter } from "./actions";

const mapStateToProps = (state, ownProps) => {
  return { active: ownProps.filter === state.visibilityFilter };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

function Link(props) {
  const { active, children, onClick } = props;
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="/"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
