import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const DeckSwStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'SWITCH NAME', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]
  const thirdHeaders = [{ title: 'FCC1' }, { title: 'FCC2' }]

  const data = [
    {
      parameter: 'FLAP HANDLE 10 DEG',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'FLAP HANDLE 20 DEG',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'FLAP HANDLE 39 DEG',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'LEFT TQA IDLE SW',
      statuses: [false, true, true, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'RIGHT TQA IDLE SW',
      statuses: [false, true, true, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'LANDING GEAR HANDLE DOWN',
      statuses: [false, true, true, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'LANDING GEAR HANDLE UP',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'FCS RESET SW',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
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
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/deckswstatus2',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270125'} right={['Select fwd to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'flight deck switch status '} right={'2/3'} />
      <Legend title="close" title2="open" />
      <DynamicTable
        data={data}
        mainHeaders={mainHeaders}
        secondaryHeaders={secondaryHeaders}
        hasBorder
        thirdHeaders={thirdHeaders}
      />
    </DefaultLayout>
  )
}

export default DeckSwStatus1
