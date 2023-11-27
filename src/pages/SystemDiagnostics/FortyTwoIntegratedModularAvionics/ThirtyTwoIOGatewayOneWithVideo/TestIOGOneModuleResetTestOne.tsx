import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Warning from "../../../../components/Warning";
import Text from "../../../../components/Text";
import styles from './DataFooter.module.scss'


const TestIOGOneModuleResetTestOne = () => {
  const navigate = useNavigate();
  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'CONFIRM',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayonewithvideo/iogonemoduleresettesttwo',
      disabled: false,
      position: 2,
    },
  ]

  return (
    <DefaultLayout 
    showNavBar 
    navBarButtons={navBarButtons}
    footer={
      <>
      <DataFooter left={''} right={['Select test menu to abort']} notLeft={true}/>
      <DataFooter left={'423201'} right={['Select confirm to continue']} />
      </>
    }
    >
      <DataHeader left={'IOG1 MODULE RESET TEST'} right={'1/2'} />
      <Text indentSize={'l'} text={''} />
      <Text indentSize={'l'} text={''} />

      <Text text={'THIS TEST WILL INITIATE SOFTWARE RESET'} />
      <Text text={'OF MAU 1 INPUT/OUTPUT GATEWAY MODULE 1'} />
      <Text indentSize={'l'} text={''} />
      <Text indentSize={'l'} text={''} />
      <Text text={'RUNNING THIS TEST WILL CAUSE THE'} />
      <Text text={'FOLLOWING CAS MESSAGES TO BE DISPLAYED:'} />
      <Text indentSize={'s'} text={'     IOGM 1 FAIL'} />
    </DefaultLayout>
  )
}

export default TestIOGOneModuleResetTestOne