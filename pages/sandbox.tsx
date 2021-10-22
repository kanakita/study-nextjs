import type { NextPage } from 'next'
import Head from 'next/head'
import BootstrapButton from "../components/BootstrapButton";
import ToggleButton from "../components/ToggleButton";
import Tab from "../components/Tab";

import { Accordion, AccordionItem } from "../components/Accordion";
import {SingularAccordion} from "../components/SingularAccordion";
import App from "../components/BootstrapTabNavigation";
import TabNav from "../components/BootstrapTabNavigation/another";
import {SimpleGallery} from "../components/SimpleGallery";


const Sandbox: NextPage = () => {



  return (
    <div>
      <Head>
        <title>Sandbox</title>
        <meta name="description" content="砂場" />
      </Head>
      <main>
        <div className="container">
          <h2>画像スライド</h2>
          <SimpleGallery
            items={[
              {
                title: "1つ目のアイテム",
                description: "説明1説明1説明1説明1説明1説明1説明1説明1",
                imgPath: "https://placehold.jp/3697c7/ffffff/360x180.png?text=1枚目の画像"
              },
              {
                title: "2つ目のアイテム",
                description: "説明2説明2説明2説明2説明2説明2説明2説明2",
                imgPath: "https://placehold.jp/f097c7/ffffff/360x180.png?text=2枚目の画像"
              },
              {
                title: "3つ目のアイテム",
                description: "説明3説明3説明3説明3説明3説明3説明3説明3",
                imgPath: "https://placehold.jp/36970f/ffffff/360x180.png?text=3枚目の画像"
              },
              {
                title: "4つ目のアイテム",
                description: "説明4説明4説明4説明4説明4説明4説明4説明4",
                imgPath: "https://placehold.jp/363fc7/ffffff/360x180.png?text=4枚目の画像"
              }
            ]}
          />

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
          <App/>

          <TabNav />
        </div>
      </main>
    </div>
  )
}

export default Sandbox
