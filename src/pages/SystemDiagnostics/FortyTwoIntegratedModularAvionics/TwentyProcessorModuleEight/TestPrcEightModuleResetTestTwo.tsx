import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Text from "../../../../components/Text";
import styles from './DataFooter.module.scss'


const TestPrcEightModuleResetTestTwo = () => {
  const navigate = useNavigate();
  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate(-2)
      },
    },
    {
      text: 'CONFIRM',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleeight/testprceightmoduleresettestpassed',
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
      <DataFooter left={'422082'} right={['Select confirm to continue']} />
      </>
    }
    >
      <DataHeader left={'PRC8 MODULE RESET TEST'} right={'2/2'} />
      <Text indentSize={'l'} text={''}/>
      <div className={styles.Body}>
        <div className={styles.Section}>
          <span className={styles.Title}>SELECTION OF THE "CONFIRM" BEZEL BUTTON</span>
        </div>
        <div className={styles.Section}>
          <span className={styles.Title}>WILL INITIATE THE TEST</span>
        </div>
      </div>
      <Text indentSize={'l'} text={''} />
    </DefaultLayout>
  )
}

export default TestPrcEightModuleResetTestTwo
