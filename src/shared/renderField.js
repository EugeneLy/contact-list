import React from 'react';

const renderField = ({
     input,
     label,
     type,
     className,
     meta: { touched, error, warning }
 }) => (
    <div>
        <div>
            <input {...input} placeholder={label} className={className} type={type} />
            {touched &&
            ((error && <div className="invalid-feedback">{error}</div>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
export default renderField;