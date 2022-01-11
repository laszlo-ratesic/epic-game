const main = async () => {
    // Compiles the contract and generates necessary artifacts
    // hre refers to the 'Hardhat Runtime Env'
    // no import needed, because it is an object containing all the functionality that is hardhat
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    // This creates a clean local Ethereum network just for this contact,
    // after script completes network will be destroyed
    const gameContract = await gameContractFactory.deploy();

    // Waits until contract is officially mined and deployed to the blockchain
    // fake miners simulate a real blockchain experience
    // ...
    // Constructor will then run once we are fully deployed
    await gameContract.deployed();

    // Gives us the address of the deployed contract
    console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();