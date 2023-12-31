import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import StatusTable from '../../../../components/StatusTable';
import Legend from '../../../../components/Legend';

const OutboardBrakeStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }];
  const data = [
    { parameter: 'BRAKE CONTROL UNIT FAIL', status1: true, status2: true },
    { parameter: 'SYMMETRIC BRAKE FAIL', status1: true, status2: true },
    { parameter: 'LEFT BRAKE FAIL', status1: true, status2: true },
    { parameter: 'RIGHT BRAKE FAIL', status1: true, status2: true },
    { parameter: 'LEFT BRAKE DEGRADE', status1: true, status2: true },
    { parameter: 'RIGHT BRAKE DEGRADE', status1: true, status2: true },
    { parameter: 'UNCOMMANDED BRAKE', status1: true, status2: true },
    { parameter: 'ANTISKID FAIL', status1: true, status2: true },
    { parameter: 'BRAKE MAINTENANCE REOD', status1: true, status2: true },
    { parameter: 'TOUCHDOWN PROTECT UNAVAIL', status1: true, status2: true },
    { parameter: 'WHEEL DESPIN FAIL/UNAVAIL', status1: true, status2: true },
    { parameter: 'LEFT LOCKED WHEEL ACTIVE', status1: true, status2: true },
    { parameter: 'RIGHT LOCKED WHEEL ACTIVE', status1: true, status2: true },
  ];

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => {
        navigate('/systemdiagnostics');
      },
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/twentyeightfuel/fortyfourbrakecontroloutboard/outboardbrakestatus2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'324005'} right={['Select fwd to continue']} />}>
      <DataHeader left={'brake ctrl unit outboard sys status'} right={'1/4'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle/>
    </DefaultLayout>
  );
};

export default OutboardBrakeStatus1;
