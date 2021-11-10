import {ethers} from "ethers";
import React, {useState} from "react"; 

const POOL_ADDRESS = "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8"; //USDC-ETH 0.3% Mainnet
//const PROVIDER_URL = 'wss://arb-mainnet.g.alchemy.com/v2/CjrYyML2BVVde-xZIVYzw5R69qQUWeDz';
const PROVIDER_URL = 'wss://mainnet.infura.io/ws/v3/da0ab80c5c02483da3e5014cb1dadc03';


const provider = new ethers.providers.WebSocketProvider(PROVIDER_URL);
const abi = ["function slot0() external view returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)",
    "event Swap(address indexed sender,address indexed recipient,int256 amount0,int256 amount1,uint160 sqrtPriceX96,uint128 liquidity,int24 tick)"];

const IPool = new ethers.Contract(POOL_ADDRESS, abi, provider);

function Price() {
    const [price, setPrice] = useState(0);

    console.log(IPool);

    React.useEffect(() => {
        async function update() {
            try {
                const newPrice = await IPool.slot0();
                console.log(newPrice);
                console.log( 1/ (1.0001**(newPrice.tick)/(10**12)) );
                setPrice(1/ (1.0001**(newPrice.tick)/(10**12)));

                IPool.on("Swap", async (sender, recipient, amount0, amount1, sqrtPriceX96, liquidity,tick, event) => {
                    event.removeListener();
                    console.log("swap");
                    const newTick = await IPool.slot0();
                    console.log(1/ (1.0001**(newTick.tick)/(10**12)));
                    setPrice(1/ (1.0001**(newTick.tick)/(10**12)));
                });

            } catch (error) {
                console.log("error");
                console.error(error);
            }
        } update();
    }, []);

    return (
        <div>
            Current ETH UniV3 0.3% on mainnet: {price.toFixed(2)} USDC/ETH 
        </div>
    );
}



export default Price;