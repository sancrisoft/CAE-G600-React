import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'EMPTY SYSTEM A PINS', status1: true, status2: true },
    { parameter: 'EMPTY SYSTEM B PINS', status1: true, status2: true },
    { parameter: 'EXT BAG DR SW1 CLSE PINS', status1: true, status2: true },
    { parameter: 'EXT BAG DR SW1 OPEN PINS', status1: true, status2: true },
    { parameter: 'EXTWTR SVCCPNLSW OPN PINS', status1: true, status2: true },
    { parameter: 'FCU A429 RX PINS', status1: true, status2: true },
    { parameter: 'FCU A429 TX PINS', status1: false, status2: false },
    { parameter: 'FILL PORT B TEMP PINS', status1: true, status2: true },
    { parameter: 'FQI CH 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'FQI: WOW PINS', status1: true, status2: true },
    { parameter: 'FULL SYSTEM A PINS', status1: true, status2: true },
    { parameter: 'FULL SYSTEM B PINS', status1: true, status2: true },
    { parameter: 'INT BAG DR SW CLSD PINS', status1: true, status2: true },
    { parameter: 'INT IND PWR/BIT SW PINS', status1: true, status2: true },
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
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233086'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 20 LINKS'} right={'3/9'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyLinksThree
