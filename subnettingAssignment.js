//convert unsigned integer to binary
const unsignedIntegerToBinary = (unsignedInteger) => {
    for(i = 0, convertedIPString = ''; i < 32; i++){
        convertedIPString +=String(unsignedInteger >>>31), unsignedInteger <<=1    
        }

        console.log(typeof convertedIPString, convertedIPString, "calling unsignedIntegerToBinary");                
}  //end
    
//Log Full Subnet Address
const logFullSubnetAddress = (subnetMask) => {
    let subnetAddress =''

        for(i = 0; i < subnetMask; i++){
            subnetAddress += '1'     
        } 

        while (subnetAddress.length <= 31){
            subnetAddress += 0        
        }  
    console.log(typeof subnetAddress, "subnet address")
}

//Split and convert CIDR block
const splitAndConvertCIDRBlock = (cidrBlock) => {

    //split CIDR block into the network address and the subnet mask    
    var splitBlock = cidrBlock.split('/')
    console.log(splitBlock)

    //NETWORK ADDRESS    
    let networkAddress = splitBlock[0].split('.')
    //console.log(networkAddress, "network address")
    
    //Convert network address to binary
    let networkString = ''

    for (let i = 0; i < networkAddress.length; i++) {       
        (((networkString += networkAddress[i]) >>> 0).toString(2));        
        console.log(typeof networkString, networkString, "network address")       
    }
    
    //SUBNET MASK
    let subnetMask = parseInt(splitBlock[1])
    console.log(typeof subnetMask, subnetMask)
    
    logFullSubnetAddress(subnetMask)        
} //end

const ipInSubnetComparison = (unsignedInteger, CIDRBock) => {
    unsignedIntegerToBinary(unsignedInteger)        
    splitAndConvertCIDRBlock(CIDRBock)
}
    
ipInSubnetComparison(0x62D2ED4B, "98.210.237.192/26")