import React, { Component } from 'react';
import { loadAbonents, removeAbonent } from '../../../actions/abonents';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import AbonentEditable from './AbonentEditable';
import PropTypes from 'prop-types';

class Abonent extends  Component {
    constructor(props) {
        super(props);
        this.state = { isEditable: false };
        this.handleRemoveAbonent = this.handleRemoveAbonent.bind(this, this.props.abonent.id);
        this.toggleMode = this.toggleMode.bind(this);
    }

    handleRemoveAbonent = (id) => {
        this.props.removeAbonent(id).then(() =>
            this.props.loadAbonents()
        );
    }

    toggleMode() {
        this.setState({ isEditable: !this.state.isEditable });
    }

    render() {
        const { name, phone, id } = this.props.abonent;

        if (this.state.isEditable) {
            return (
                <AbonentEditable
                    abonent={this.props.abonent}
                    toggleMode={this.toggleMode}
                />
            );
        }

        return (
            <div className="card mb-1">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{phone}</p>
                    <button onClick={this.toggleMode} className="btn btn-primary btn-sm mr-2">Edit</button>
                    <button onClick={this.handleRemoveAbonent} className="btn btn-outline-warning btn-sm mr-2">Remove</button>
                    <Link to={`/history/${id}`} className="btn btn-link btn-sm">Call history</Link>
                </div>
            </div>
        );
    }
}

Abonent.propTypes = {
    loadAbonents: PropTypes.func,
    removeAbonent: PropTypes.func,
    abonent: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        history: PropTypes.array
    })
};

const mapDispatchToProps = dispatch => ({
    loadAbonents: () => dispatch(loadAbonents()),
    removeAbonent: (id) => dispatch(removeAbonent(id))
})

export default connect(null,mapDispatchToProps)(Abonent);