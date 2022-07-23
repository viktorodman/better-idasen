export const hexStrToArray = (hexString: any) => {
    let decimals = []
    for (let i = 0; i < hexString.length; i += 2) {
        decimals.push(parseInt(hexString.substr(i, 2), 16))
    }
    return new Uint8Array(decimals)
}