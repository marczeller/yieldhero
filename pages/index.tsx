import App from '../components/Layout'
import { withApollo } from '../lib/apollo'

import { useStateValue } from '../State/globalState'

import { Row, Col } from 'react-bootstrap'

import NextStyledFooter from '../components/NextStyledFooter'
import Router from 'next/router'
import AuthModal from '../components/AuthModal'
import { donateGradient, flashGradient, poolGradient, swapGradient, themeBlack } from '../theme'
import { useEffect } from 'react'

const IndexPage = () => {

    const [{ currentAccount, showAuthModal, currentNetwork }, dispatch] = useStateValue()

    useEffect(() => {
        dispatch({
            type: 'updateCurrentHeader',
            currentHeader: "🦸‍♂️ Yield Hero"
        })
    }, [])

    return (

        <div>

            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="descContainer">
                        <div className="desc">
                            "With great yield comes great responsibility"
                    </div>
                    </div></Col>

            </Row>


            <Row>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <button onClick={() => {


                        Router.push("/atokens").then(() => {
                            dispatch({
                                type: 'updateCurrentHeader',
                                currentHeader: "Swap aTokens"
                            })
                        })
                    }
                    } >
                        <p>
                            🤖 Swap aTokens
                            </p>

                        <div>Easily swap your aTokens for the highest yield</div>
                    </button>
                </Col>

                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <button onClick={() => {


                        Router.push("/redirect").then(() => {

                            window.scrollTo(0, 0)

                            dispatch({
                                type: 'updateCurrentHeader',
                                currentHeader: "Redirect Yield"
                            })
                        })

                    }} style={{ background: donateGradient }}>



                        <p> 😇 Redirect Yield
                           </p>


                        <div>Redirect your Aave yield to support OSS</div>


                    </button>
                </Col>




                <div style={{ marginTop: 20 }}></div>


                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <button style={{ background: poolGradient }}>
                        <p> 🏊‍♂️ Join Pool
                           </p>

                        <div>Coming soon!</div>
                    </button>
                </Col>

                {/*} <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <button style={{ background: flashGradient }}>

                        <p>
                            Flash Loans
                        </p>
                        <div>
                            Coming soon!
                        </div>
                    </button>
                </Col>
                {*/}
            </Row>



            {
                showAuthModal &&
                <AuthModal />
            }


            {/*
                currentAccount && currentNetwork !== "kovan" &&
                <div>This dapp currently only works on Kovan! You are connected to {currentNetwork}.</div>
            */}

            <style jsx>
                {`

                    .descContainer {
                        display:flex;
                        flex:1;
                        align-items:center;
                        justify-content:center;
                        margin-bottom:30px;
                        background:ghostwhite;
                        height:50px;
                        margin-top:20px;
                        border-radius:20px;
                    }
                    .desc {
                        font-weight:500;
                       color:${themeBlack};
                        font-size:21px;
                    }

                    button {
                        border-radius:2px;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        width:100%;
                        height:200px;
                        margin-bottom:20px;
                        background:${swapGradient};
                        transition:transform 0.2s;
                    }

                    button:hover {
                        transform:scale(1.02);
                    }

                    button > p {
                        font-weight:bold;
                        font-size:32px;
                    }

                    button > div {
                        font-size:16px;
                        font-weight:300;
                    }

                    @media screen and (max-width:991px) {

                        .descContainer {
                            padding:15px;
                            height:80px;
                        }
                        .desc {
                            font-size:18px;
                            text-align:center;
                        }
                    }
                `}
            </style>



            <NextStyledFooter />

        </div >
    )

}

export default withApollo({ ssr: true })(IndexPage)
