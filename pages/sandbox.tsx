import type { NextPage } from 'next'
import Head from 'next/head'
import BootstrapButton from "../components/BootstrapButton";
import ToggleButton from "../components/ToggleButton";


const Sandbox: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sandbox</title>
        <meta name="description" content="砂場" />
      </Head>
      <main>
        <h1>Hello!</h1>
        {/*<BootstrapButton label={"ボタン"}/>*/}
        <ToggleButton
          labelOnInactive={"ボタン"}
          labelOnActive={"click!"}
          defaultStatus={false}
          onClick={ (status) => {
            console.log(status);
          }}
        />
      </main>
    </div>
  )
}

export default Sandbox
