import { createContext, ReactNode, useContext, useState } from 'react';

const Context = createContext<{
  currentId: string;
  setCurrentId: (id: string) => void;
}>({
  currentId: '',
  setCurrentId: () => {
  }
});

interface BaseProps {
  children: ReactNode
}

interface Props extends BaseProps {
  initialTab: string,
  tabs: ReactNode;
}

export function BootstrapTabNavigation({ initialTab, children, tabs }: Props) {
  const [currentId, setCurrentId] = useState(initialTab);
  return (
    <Context.Provider value={{ currentId: currentId, setCurrentId: setCurrentId }}>
      <ul className="nav nav-tabs" role="tablist">
        {tabs}
      </ul>
      <div className="tab-content">
        {children}
      </div>
    </Context.Provider>
  )
}


interface TabProps extends BaseProps {
  target: string;
}

export function BootstrapTab({ target, children }: TabProps) {
  const { setCurrentId, currentId } = useContext(Context);
  return (
    <li className="nav-item" role="presentation">
      <a className={`nav-link ${currentId === target ? 'active' : ''}`}
         href={`#${target}`}
         onClick={() => {
           setCurrentId(target);
         }}
         role="tab"
      >{children} </a>
    </li>
  )
}

interface PanelProps extends BaseProps {
  id: string;
}
export function BootstrapTabPanel({ id, children }: PanelProps) {
  const { currentId } = useContext(Context);
  return (
    <div className={`tab-pane fade ${currentId === id ? 'show active' : ''}`}
         id={id}
         role="tabpanel"
         aria-labelledby="contact-tab">
      {children}
    </div>
  )
}



function TabNav() {
  return(
    <BootstrapTabNavigation
      initialTab="home"
      tabs={
        <>
          <BootstrapTab target="home">HOME</BootstrapTab>
          <BootstrapTab target="about">ABOUT</BootstrapTab>
        </>
      }
    >
      <BootstrapTabPanel id="home">HOME</BootstrapTabPanel>
      <BootstrapTabPanel id="about">About</BootstrapTabPanel>
    </BootstrapTabNavigation>

  )
}

export default TabNav
