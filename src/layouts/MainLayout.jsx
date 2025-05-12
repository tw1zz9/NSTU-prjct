import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SidePanel from '../components/SidePanel';
import '../scss/app.scss';

const MainLayout = ({ children }) => {
  const isSidePanelOpen = useSelector((state) => state.sidePanel.isOpen);

  const marginLeft = !isSidePanelOpen ? '352px' : '0';

  return (
    <div className="layout">
      <Header className="header" />
      <SidePanel isSidePanelOpen={isSidePanelOpen} />
      <main
        className="main_layout"
        isSidePanelOpen={isSidePanelOpen}
        style={{ marginLeft, transition: `.5s` }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
