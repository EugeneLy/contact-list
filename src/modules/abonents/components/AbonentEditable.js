import React, { Component } from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { loadAbonents } from './../../../actions/abonents';
import api from './../../../api/abonents';
import renderField from "../../../shared/renderField";
import {required} from "../../../shared/validation";

class AbonentEditable extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(change('editAbonent', 'name', this.props.abonent.name));
        this.props.dispatch(change('editAbonent', 'phone', this.props.abonent.phone));
    }
    submitForm(value) {
        value.id = this.props.abonent.id;
        value.history = this.props.abonent.history;

        api.editAbonent(this.props.abonent.id, value).then(() =>
            this.props.loadAbonents()
        )

        this.props.toggleMode();
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
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
                                className="btn btn-info mr-2 btn-sm">Accept</button>
                        <button onClick={this.props.toggleMode}
                                type="submit"
                                className="btn btn-secondary btn-sm">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

AbonentEditable.propTypes = {
    dispatch: PropTypes.func,
    handleSubmit: PropTypes.func,
    abonent: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        history: PropTypes.array
    })
};

const mapDispatchToProps = dispatch => ({
    loadAbonents: () => dispatch(loadAbonents())
})

export default connect(null,mapDispatchToProps)(reduxForm({ form: 'editAbonent' })(AbonentEditable));