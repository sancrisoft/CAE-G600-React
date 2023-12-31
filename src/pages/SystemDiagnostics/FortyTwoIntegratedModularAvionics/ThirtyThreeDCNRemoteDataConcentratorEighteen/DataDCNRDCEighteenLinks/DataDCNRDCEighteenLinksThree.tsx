import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCEighteenLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'FUEL INTERTNK CLOSE PINS', status1: true, status2: true },
    { parameter: 'FUEL INTERTNK OPEN PINS', status1: true, status2: true },
    { parameter: 'FUEL XFLOW CLOSED PINS', status1: true, status2: true },
    { parameter: 'FUEL XFLOW OPEN PINS', status1: true, status2: true },
    { parameter: 'FWD EXTPNL DRSW OPN PINS', status1: true, status2: true },
    { parameter: 'FWD EXTPNL LT28V OT PINS', status1: true, status2: true },
    { parameter: 'FWD FLR EOPOVHT TST PINS', status1: true, status2: true },
    { parameter: 'FWD FLR EOP OVHT OT PINS', status1: true, status2: true },
    { parameter: 'FWD FLR EOPOVHT CHK PINS', status1: true, status2: true },
    { parameter: 'GCMS 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'GCMS 2 A429 TX PINS', status1: true, status2: true },
    { parameter: 'GCMS 2 CTRL A429 RX PINS', status1: true, status2: true },
    { parameter: 'GCMS 2 CTRL A429 TX PINS', status1: true, status2: true },
    { parameter: 'GSCP POWER GND ONLY PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233068'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 18 LINKS'} right={'3/8'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCEighteenLinksThree
