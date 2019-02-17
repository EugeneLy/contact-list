import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage } from '../../../actions/abonents';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledPrev: true,
            disabledNext: false,
        };

        this.switchNextPage = this.switchNextPage.bind(this);
        this.switchPrevPage = this.switchPrevPage.bind(this);
    }

    switchNextPage() {
        if (this.props.nextPage) {
            this.props.changePage(this.props.nextPage.url);
            this.setState({
                disabledPrev: false
            })
        } else {
            this.setState({
                disabledNext: true
            })
        }
    }

    switchPrevPage() {
        if (this.props.prevPage) {
            this.props.changePage(this.props.prevPage.url);
            this.setState({
                disabledNext: false
            })
        } else {
            this.setState({
                disabledPrev: true
            })
        }
    }

    render() {
        return (
            <ul className="pagination">
                <li className={`page-item ${this.state.disabledPrev ? 'disabled' : null}`}>
                    <span onClick={this.switchPrevPage} className="page-link">Previous</span>
                </li>
                <li className={`page-item ${this.state.disabledNext ? 'disabled' : null}`}>
                    <span onClick={this.switchNextPage} className="page-link">Next</span>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nextPage: state.abonents.link.next,
        prevPage: state.abonents.link.prev
    }
}


const mapDispatchToProps = dispatch => ({
    changePage: (link) => dispatch(changePage(link))
})

export default connect(mapStateToProps,mapDispatchToProps)(Pagination);