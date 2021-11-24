import React from "react"; 
import Price from "./Price.js";
import Accordion from 'react-bootstrap/Accordion'
import './App.css';

function App() {
  
  return ( <>
    <div className="textarea">
        <p> 
          <img src="./cali.png" className="banner" alt="logo"/>
        </p>
        <div className="box">
          <div className="box-header">
            <Price />
          </div>

          <div className="box-body">
            <p> Deposit: coming soon </p>
          </div>

        </div>
    </div>

    <div className="textarea">
        <div className="box">
          <div className="box-body">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is Jiujitsu ?</Accordion.Header>
                <Accordion.Body>Jiujitsu is a collective just-in-time liquidity strategy on Ethereum</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How does it work ?</Accordion.Header>
                <Accordion.Body>During the first iteration, users deposit ETH to the Jiujitsu reserve which is used by
                  the Jiujitsu bot (ENS: jiujitsu-bot.eth) to perform just-in-time liquidity operations. Later iterations 
                  will see additional Uniswap V3 LP strategies (avoiding "sleeping" liquidity in Jiujitsu reserve).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What is "just-in-time liquidity" ?</Accordion.Header>
                <Accordion.Body>At its core, JITL is providing just enough liquidity to sustain a specific order (or group of orders). 
                  In the Uniswap V3 context, it means finding bigger-than-average swaps (or aggregate similar ones in order to "build" a bigger one),
                  providing adequate liquidity before it and remove it after. You can find a Dune dashboard from ChainsightAnalytics 
                   <a href="https://dune.xyz/ChainsightAnalytics/Uniswap-v3-Just-in-Time-(JIT)-Liquidity-MEV" target="_blank">here</a>
                 </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What are the pros of JITL</Accordion.Header>
                <Accordion.Body>For users, having a massive liquidity when their swap is processed will crush their slippage (granting them
                  a price as close as they intended to have). For JITL bot operators, having a higher pool share gives them a higher share of the
                  fees (hence the importance of spotting bigger swaps).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>What are the cons of JITL</Accordion.Header>
                <Accordion.Body> - By removing slippage, JITL <i>might</i> impede price-discovery process (which is balanced by arbitrage opportunities arising
                with other exchanges, by users or JITL having to rebalance their inventory).
                <br/> - As the share of the fees is directly proportional to the share of the total liquidity (and this is a multi-transaction strategy, not accessible to flashloan), JITL is a capital-intensive strategy.
                <br/> - Every new position require gas (Jiujitsu reuse some of them in order to maximise gas efficiency), require bigger capital to insure a decent ROE
                <br/> - Finally, by taking a bigger share of the fees, regular liquidity provider are at lost (as an opportunity cost). This is the reason of JiuJITsu, offering this possibility
                to the majority, without needing +10m $.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>What's the user incentive?</Accordion.Header>
                <Accordion.Body>Jiujitsu has <b>no ico</b>.
                <br />The profit of JITL operations is going back to the Jiujitsu reserve in order to compound.
                By depositing into the Jiujitsu reserve, you're entitled to a share of it, materialized as the $JITL tokens you're receiving.
                Those can be later burned to get back your initial investment plus your share of the fees collected, in the same way Uniswap V2 LP works.
                Jiujitsu is not providing a secondary market for $JITL at the moment.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>What are the risks?</Accordion.Header>
                <Accordion.Body>Smart contract risk: the Reserve holds Jiujitsu assets
                  <br/>Bot risk: jiujitsu-bot.eth uses the Reserve assets
                  <br/>Gas/flashbot war risk: as of writing, only 2 MEV-BOT are running succesfull JITL strategies (<a href="https://dune.xyz/ChainsightAnalytics/Uniswap-v3-Just-in-Time-(JIT)-Liquidity-MEV" target="_blank">0x9799 and 0xa57b</a>), using flashbots.
                  having a third actor in "their space" might trigger a war to get to the top spot, decreasing everyone's return. We try to focus on different
                  segments than they are and remains open to dialogue.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Why "Jiujitsu"?</Accordion.Header>
                <Accordion.Body>We had to sacrifice the <a href="https://en.wikipedia.org/wiki/Jujutsu#Etymology" target="_blank">correct spelling</a> for the JIT pun
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

        </div>
    </div>
    </>);
}

export default App;
