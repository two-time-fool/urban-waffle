import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSuperheroes, getOffset } from '../selectors/superheroes';
import { fetchSuperheroes, increaseOffset, decreaseOffset } from '../actions/marvel';
import Superheroes from '../components/Superheroes';

class AllSuperheroes extends PureComponent {
  static propTypes = {
    superheroes: PropTypes.array.isRequired,
    offset: PropTypes.number.isRequired,
    fetch: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }
  
  componentDidUpdate(prevProps) {
    console.log('PREVPROPS', prevProps.offset);
    console.log('Current PROPS', this.props.offset);
    if(prevProps.offset !== this.props.offset) {
      return this.props.fetch();
    }
  }

  render() {
    return (
      <Superheroes superheroes={this.props.superheroes} onClick={this.props.onClick.bind(null, this.props.offset)} />
    );
  }
}

const mapStateToProps = state => ({
  superheroes: getSuperheroes(state),
  offset: getOffset(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    console.log('fetch dispatch', props);
    dispatch(fetchSuperheroes(props.offset));
  },
  onClick(offset, { target }) {
    const factoryMethod = {
      increase: increaseOffset,
      decrease: decreaseOffset
    };
    dispatch(factoryMethod[target.name](offset));
    dispatch(fetchSuperheroes(offset));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSuperheroes);
