export function sliceEthAddress(address: string): string {
    if (address.length !== 42 || !address.startsWith('0x')) {
        throw new Error('Invalid Ethereum address');
    }
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
}