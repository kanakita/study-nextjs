import type { NextPage } from 'next'
import Head from 'next/head'
import BootstrapButton from "../components/BootstrapButton";
import ToggleButton from "../components/ToggleButton";
import Accordion from "../components/Accordion";
import TabButton from "../components/Tab/TabButton";
import TabContents from "../components/Tab/TabContents";
import TabContent from "../components/Tab/TabContent";
import TabButtons from "../components/Tab/TabButtons";
import Tab from "../components/Tab";


const Sandbox: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sandbox</title>
        <meta name="description" content="砂場" />
      </Head>
      <main>
        <div className="container">
          <h2>ボタン</h2>
          <BootstrapButton label={"ボタン"}/>
          <h2>トグルボタン</h2>
          {<ToggleButton
            labelOnInactive={"ボタン"}
            labelOnActive={"click!"}
            defaultStatus={false}
            onClick={ (status) => {
              console.log(status);
            }}
          />}

          <h2>アコーディオン</h2>
          <Accordion
            title={"見出し見出し見出し"}
            expanded
          >
            <p>aaaa</p>
            <p>aaaa</p>
            <p>aaaa</p>
          </Accordion>
          <Accordion
            title={"見出し見出し見出し"}
          >
            <p>aaaa</p>
            <p>aaaa</p>
            <p>aaaa</p>
          </Accordion>

          <h2>タブ切り替え</h2>

          <Tab activeId="first">
            <TabButtons>
              <TabButton label="タブ1" id="first" active={true}/>
              <TabButton label="タブ2" id="second"/>
            </TabButtons>

            <TabContents>
              <TabContent id="first" active={true}>タブ1の中身</TabContent>
              <TabContent id="second">タブ2の中身</TabContent>
            </TabContents>
          </Tab>
        </div>
      </main>
    </div>
  )
}

export default Sandbox
