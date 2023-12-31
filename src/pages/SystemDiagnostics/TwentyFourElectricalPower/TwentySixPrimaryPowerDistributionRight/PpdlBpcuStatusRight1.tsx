import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlBpcuStatusRight1 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'CAN BUS' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'R CAN A FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'R CAN B FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'R CAN A LOOPBACK FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'R CAN B LOOPBACK FAULT',
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246010'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr bpcu status'} right={'2/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlBpcuStatusRight1
