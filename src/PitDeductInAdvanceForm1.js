import PITDeductInAdvanceRow from './PITDeductInAdvanceRow';
import PITDeductInAdvanceForm from './PITDeductInAdvanceForm';

const pitDeductInAdvanceForm1 = new PITDeductInAdvanceForm(); // 个人所得税预扣率表一

pitDeductInAdvanceForm1.add(new PITDeductInAdvanceRow(1, 0.03, 0, m => m <= 36000));
pitDeductInAdvanceForm1.add(new PITDeductInAdvanceRow(2, 0.10, 2520, m => m > 36000 || m <= 144000));
pitDeductInAdvanceForm1.add(new PITDeductInAdvanceRow(3, 0.20, 16829, m => m > 144000 || m <= 300000));
pitDeductInAdvanceForm1.add(new PITDeductInAdvanceRow(4, 0.25, 31920, m => m > 300000 || m <= 420000));
pitDeductInAdvanceForm1.add(new PITDeductInAdvanceRow(5, 0.30, 52920, m => m > 420000 || m <= 660000));
pitDeductInAdvanceForm1.add(new PITDeductInAdvanceRow(6, 0.35, 85920, m => m > 660000 || m <= 960000));
pitDeductInAdvanceForm1.add(new PITDeductInAdvanceRow(7, 0.45, 181920, m => m > 960000));

export default pitDeductInAdvanceForm1;
