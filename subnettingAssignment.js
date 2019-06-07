//convert unsigned integer to binary
const unsignedIntegerToBinary = (unsignedInteger) => {
    for(i = 0, convertedIPString = ''; i < 32; i++){
        convertedIPString +=String(unsignedInteger >>>31), unsignedInteger <<=1    
        }

        return convertedIPString //THIS RETURNS A STRING       
}  //end
    
//Log Full Subnet Address
const logFullSubnetAddress = (subnetMask) => {
    let subnetAddressString =''

        for(i = 0; i < subnetMask; i++){
            subnetAddressString += '1'     
        } 

        while (subnetAddressString.length <= 31){
            subnetAddressString += 0 
                
        }  

    let subnetAddress = parseFloat(subnetAddressString)
    console.log(typeof subnetAddress, subnetAddress, "here is subnet address")
    return subnetAddress
}

//Split and convert CIDR block
const splitAndConvertCIDRBlock = (cidrBlock) => {

    //split CIDR block into the network address and the subnet mask    
    var splitBlock = cidrBlock.split('/')
    console.log(splitBlock)

    //NETWORK ADDRESS    
    let networkAddress = splitBlock[0].split('.')
        
    //Convert network address to binary
    let networkString = ''

    for (let i = 0; i < networkAddress.length; i++) {       
        (((networkString += networkAddress[i]) >>> 0).toString(2));                 
    }

    let networkInBinary = parseInt(networkString)
    
    console.log(typeof networkInBinary, "network address in number")
    
    //SUBNET MASK
    let subnetMask = parseInt(splitBlock[1])
    console.log(typeof subnetMask, subnetMask, "subnet mask in number")
    
    logFullSubnetAddress(subnetMask)  
    
    return networkString
} //end

const ipInSubnetComparison = (unsignedInteger, CIDRBock) => {
    //Call helper functions
    unsignedIntegerToBinary(unsignedInteger)        
    splitAndConvertCIDRBlock(CIDRBock)

    //(ipNumber & cidrMask) == cidrAdd_networkaddress
    (convertedIPString & subnetAddress) == networkInBinary
}
    
ipInSubnetComparison(0x62D2ED4B, "98.210.237.192/26")

// var ipNumber = 01100010110100101110110101001011;
// var cidrMask = 11111111111111111111111111000000;
// var cidrAdd_networkaddress =  01100010110100101110110111000000;