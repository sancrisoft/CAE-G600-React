import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatusRight3 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: ' PARAMETERS' }, { title: 'CH A' }, { title: 'CH B' }]

  const tableHeader2 = [
    { title: 'CONTACTOR STATUS' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader3 = [
    { title: 'CONTACTOR COMMAND' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader4 = [
    { title: 'STATUS' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    { parameter: 'AUX TRU VOLTS', status1: '30.5 VDC', status2: '30.5 VDC' },
    { parameter: 'AUX TRU CURRENT', status1: '0.0 A', status2: '0.0 A' },
    { parameter: 'AUX DC BUS', status1: '0.0 VDC', status2: '0.0 VDC' },
  ]

  const data2 = [
    {
      parameter: 'EDC/ADC CONTACTOR',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'ADBC CONTACTOR',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data3 = [
    {
      parameter: 'EDC/ADC CONTACTOR',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'ADBC CONTACTOR',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data4 = [
    {
      parameter: 'DC RESET',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

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
      text: 'prev',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright4',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246017'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr power status'} right={'4/12'} />
      <DataTable data={data} mainHeaders={tableHeader} />
      <Legend title="open" title2="closed" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
      <Legend title="open" title2="closed" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader3} />
      <Legend title="normal" title2="reset" />
      <StatusTable data={data4} hasHeader tableHeader={tableHeader4} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatusRight3
