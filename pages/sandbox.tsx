import type { NextPage } from 'next'
import Head from 'next/head'
import BootstrapButton from "../components/BootstrapButton";
import ToggleButton from "../components/ToggleButton";
import Tab from "../components/Tab";

import { Accordion, AccordionItem } from "../components/Accordion";
import {SingularAccordion} from "../components/SingularAccordion";


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
          <Accordion>
            <AccordionItem label={"ラベル"}>aaa</AccordionItem>
            <AccordionItem label={"ラベル2"}>2つめ</AccordionItem>
          </Accordion>

          <h2>アコーディオン2</h2>

          <SingularAccordion
            items={[
              {
                label: "ボタン1",
                children: (
                  <>
                    <div>111</div>
                  </>
                )
              },
              {
                label: "ボタン2",
                children: (
                  <>
                    <div>111</div>
                  </>
                )
              }
            ]}
            initialOpen="ボタン1"
          />

          <h2>タブ切り替え</h2>

          <Tab tabItems={[
            {
              label: "タブ1",
              id: "tab1",
              panel: "タブ1の中身"
            },
            {
              label: "タブ2",
              id: "tab2",
              panel: "タブ2の中身"
            }
          ]}
               initialOpen={"tab2"}
          />
        </div>
      </main>
    </div>
  )
}

export default Sandbox
