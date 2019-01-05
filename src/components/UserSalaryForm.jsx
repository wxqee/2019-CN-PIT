import React from 'react';
import $ from 'jquery';
import {pitMonthlyDeducted} from "../Constants";

class UserSalaryForm extends React.Component {

    form = null;

    componentWillMount() {
        this.setForm = this.setForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setForm(ref) {
        this.form = ref;
    }

    handleSubmit(e) {
        e.preventDefault();

        const { onSubmit } = this.props;
        const formValues = $(this.form)
            .serializeArray()
            .reduce((reducer, field) => ({...reducer, [field.name]: Number.parseFloat(field.value) }), {});

        console.log(`formValues => ${JSON.stringify(formValues)}`);

        if (typeof onSubmit === 'function') {
            onSubmit(formValues);
        }

        return false;
    }

    render() {
        return (
            <form ref={this.setForm} onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>薪资情况</legend>

                    <div className="form-group">
                        <label htmlFor="MonthlySalary">每月应发工资</label>
                        <input className="form-control" type="number" name="MonthlySalary" step="0.01" placeholder="每月应发工资" defaultValue="10000" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="MonthlyDeducted">每月减除费用</label>
                        <input className="form-control" type="number" name="MonthlyDeducted" step="0.01" placeholder="每月减除费用" value={pitMonthlyDeducted} readOnly disabled />
                    </div>

                    <div className="form-group">
                        <label htmlFor="MonthlySpecialDeducted">三险一金等专项扣除</label>
                        <input className="form-control" type="number" name="MonthlySpecialDeducted" step="0.01" placeholder="三险一金等专项扣除" defaultValue="1500" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="MonthlySixSpecialDeducted">6大项等专项扣除</label>
                        <input className="form-control" type="number" name="MonthlySixSpecialDeducted" step="0.01" placeholder="6大项等专项扣除" defaultValue="1000" />
                    </div>

                    <button type="submit" className="btn btn-primary">计算</button>
                </fieldset>
            </form>
        );
    }
}

export default UserSalaryForm;
