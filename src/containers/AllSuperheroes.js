import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSuperheroes } from '../selectors/superheroes';
import { fetchSuperheroes } from '../actions/marvel';
import Superheroes from '../components/Superheroes';

class AllSuperheroes extends PureComponent {
  static propTypes = {
    superheroes: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }
  
  render() {
    return (
      <Superheroes superheroes={this.props.superheroes} />
    );
  }
}

const mapStateToProps = state => ({
  superheroes: getSuperheroes(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchSuperheroes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSuperheroes);
