import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Number from './components/Number'

class History extends Component {
    renderNumbers() {
        const id = this.props.match.params.id;
        let curentAbonent = this.props.abonents.filter(abonent => abonent.id === id)

        return curentAbonent[0].history.map((item, index) => <Number key={`${index}${item}`} number={item} />)
    }

    render() {
        return (
            <div className="row justify-content-md-center mt-4 mb-4">
                <div className="col-md-6">
                    {this.renderNumbers()}
                    <Link to='/' className="btn btn-link btn-sm">Back to numbers</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        abonents: state.abonents.list
    }
}

export default connect(mapStateToProps)(History);