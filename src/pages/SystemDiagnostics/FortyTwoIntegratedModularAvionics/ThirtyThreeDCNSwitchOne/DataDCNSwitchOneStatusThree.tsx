import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const DataDCNSwitchOneStatusThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'SW1 - SW2 LINK', status1: true, status2: true },
    { parameter: 'SW1 - RDC 13 LINK', status1: true, status2: true },
    { parameter: 'SW1 - RDC 15 LINK', status1: true, status2: true },
    { parameter: 'SW1 - RDC 17 LINK', status1: true, status2: true },
    { parameter: 'SW1 - RDC 19 LINK', status1: true, status2: true },
    { parameter: 'SW1 - RDC 22 LINK', status1: true, status2: true },
    { parameter: 'SW1 - IOGM 1 LINK', status1: true, status2: true },
    { parameter: 'SW1 - IOGM 2 LINK', status1: true, status2: true },
    { parameter: 'SW1 - ESC 1A LINK', status1: true, status2: true },
    { parameter: 'SW1 - AHTMS A LINK', status1: true, status2: true },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate('/systemdiagnostics')
      },
    },
    {
      text: 'PREV',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233003'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'SWITCH 01 STATUS'} right={'3/3'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNSwitchOneStatusThree
