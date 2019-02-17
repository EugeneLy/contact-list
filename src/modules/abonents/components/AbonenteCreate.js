import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from "react-redux";
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

import { loadAbonents } from './../../../actions/abonents';
import api from './../../../api/abonents';
import renderField from './../../../shared/renderField';
import { required } from './../../../shared/validation';


class AbonentCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { isCreating: false };
        this.submitForm = this.submitForm.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
    }

    submitForm(value) {
        value.id = uuid();
        value.history = ["+3 (970) 478-2385", "+3 (867) 436-2127", "+3 (938) 540-2413",]; // Phones mocking

        api.createAbonent(value).then(() =>
            this.props.loadAbonents()
        )
        this.props.reset();
        this.toggleMode();
    }

    toggleMode() {
        this.setState({ isCreating: !this.state.isCreating });
        this.props.reset();
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        if (!this.state.isCreating) {
            return (
                <div onClick={this.toggleMode} className="btn btn-success w-100 mb-2">Create</div>
            );
        }
        return (
            <div className="card mb-1">
                <div className="card-body">
                    <form onSubmit={handleSubmit(this.submitForm)}>
                        <div className="form-group">
                            <Field type="text"
                                   className="form-control"
                                   name="name"
                                   label="Name"
                                   component={renderField}
                                   validate={[required]}/>
                        </div>
                        <div className="form-group">
                            <Field type="text"
                                   className="form-control"
                                   name="phone"
                                   label="Phone"
                                   component={renderField}
                                   validate={[required]}/>
                        </div>
                        <button disabled={pristine || submitting}
                                type="submit"
                                className="btn btn-info mr-2 btn-sm">Create</button>
                        <span onClick={this.toggleMode} className="btn btn-secondary btn-sm">Cancel</span>
                    </form>
                </div>
            </div>
        );
    }
}

AbonentCreate.propTypes = {
    handleSubmit: PropTypes.func
};


const mapDispatchToProps = dispatch => ({
    loadAbonents: () => dispatch(loadAbonents())
})

export default connect(null,mapDispatchToProps)(reduxForm({ form: 'createAbonent' })(AbonentCreate));