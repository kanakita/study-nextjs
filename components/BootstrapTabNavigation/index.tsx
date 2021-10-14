import { ReactNode, useState } from 'react';

type Panel = {
  name: string;
  body: ReactNode;
}

interface Props {
  initialTab: string,
  panels: Panel[]
}

export function BootstrapTabNavigation({ initialTab, panels }: Props) {
  const [currentId, setCurrentId] = useState(initialTab);
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        {panels.map(({ name }) => (
          <li key={name} className="nav-item" role="presentation">
            <a className={`nav-link ${currentId === name ? 'active' : ''}`}
               href={`#${name}`}
               role="tab"
               onClick={() => setCurrentId(name)}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {panels.map(({ name, body }) => (
          <div
            key={name}
            className={`tab-pane fade ${currentId === name ? 'show active' : ''}`}
            id={name}
            role="tabpanel"
          >
            {body}
          </div>
        ))}
      </div>
    </>
  )
}


function App() {
  return(
    <BootstrapTabNavigation
      panels={
        [
          {
            name: 'hoge',
            body: 'hello',
          },
          {
            name: 'hoge2',
            body: 'hello2',
          }
        ]
      }
      initialTab="hoge"
    />
  )
}

export default App
