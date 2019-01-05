import React from 'react';
import PITCalculator from "../PITCalculator";
import pitDeductInAdvanceForm1 from "../PitDeductInAdvanceForm1";
import UserSalaryForm from './UserSalaryForm';

class PitCalc extends React.Component {

    state = {
        result: null,
        tab: 'table',
    };

    componentWillMount() {
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showResult = this.showResult.bind(this);
        this.showCSVResult = this.showCSVResult.bind(this);
        this.showTableResult = this.showTableResult.bind(this);
    }

    handleSubmit(values) {
        const { MonthlySalary, MonthlySpecialDeducted, MonthlySixSpecialDeducted } = values;

        const calc = new PITCalculator(
            pitDeductInAdvanceForm1,
            MonthlySalary,
            MonthlySpecialDeducted,
            MonthlySixSpecialDeducted,
        );
        const result = calc.calculate();

        this.setState({ result });
    }

    showResult(tab) {
        console.log(`tag => ${tab}`);
        this.setState({ tab });
    }

    showCSVResult() {
        this.showResult('csv');
    }

    showTableResult() {
        this.showResult('table');
    }

    renderPreText() {
        const { result } = this.state;

        return [
            '月份,应缴税\n',
            ...result.map(({ month, pit }) => `${month},${pit}\n`)
        ];
    }

    renderPreTable() {
        const { result } = this.state;

        return (
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">月份</th>
                    <th scope="col">应缴税</th>
                    <th scope="col">等级</th>
                </tr>
                </thead>
                <tbody>
                {
                    result.map(({ month, pit, level }) => (
                        <tr key={month}>
                            <th scope="row">{month}</th>
                            <td>{pit}</td>
                            <td><kbd>{level}</kbd></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        );
    }

    renderResult() {
        const { result, tab } = this.state;

        if (!Array.isArray(result)) {
            return (
                <div>没有结果</div>
            );
        }

        return (
            <fieldset>
                <legend>缴税结果</legend>

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={`nav-link ${tab === 'table' ? 'active' : ''}`} href="javascript:void(null);" onClick={this.showTableResult}>表格</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${tab === 'csv' ? 'active' : ''}`} href="javascript:void(null);" onClick={this.showCSVResult}>CSV</a>
                    </li>
                </ul>

                <br />

                {tab === 'csv' ? <pre>{this.renderPreText()}</pre> : null}
                {tab === 'table' ? this.renderPreTable() : null}
            </fieldset>
        );
    }

    render() {
        return (
            <div className="container">
                <UserSalaryForm onSubmit={this.handleSubmit} />
                <br />
                {this.renderResult()}
            </div>
        );
    }

}

export default PitCalc;
