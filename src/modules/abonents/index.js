import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadAbonents, removeAbonent } from '../../actions/abonents'
import Abonent from './components/Abonent'
import Pagination from './components/Pagination';
import AbonentCreate from './components/AbonenteCreate';

class Abonents extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount() {
        this.props.loadAbonents();
    }

    renderList() {
        return this.props.abonents.map((item) =>
            <Abonent key={item.id} abonent={item}/> )
    }

    render() {
        return (
            <div className="row justify-content-md-center mt-4 mb-4">
                <div className="col-md-6">
                    <AbonentCreate />
                    {this.renderList()}
                    <Pagination />
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


const mapDispatchToProps = dispatch => ({
    loadAbonents: () => dispatch(loadAbonents()),
    removeAbonent: (id) => dispatch(removeAbonent(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Abonents);