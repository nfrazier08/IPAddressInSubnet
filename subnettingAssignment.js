//Variables: unsignedInteger, CIDRBock

//convert unsigned integer to binary
const unsignedIntegerToBinary = (unsignedInteger) => {
    for(i = 0, convertedIPString = ''; i < 32; i++){
        convertedIPString +=String(unsignedInteger >>>31), unsignedInteger <<=1    
        }

        console.log(typeof convertedIPString, convertedIPString);
        //console.log(convertedIPString.length);          
}//End

    //console.log("unsigned integer to binary")
    unsignedIntegerToBinary(0x62D2ED4B)

//split and convert CIDR block
//CIDR Subnet is passed as a string
const splitAndConvertCIDRBlock = (cidrBlock) => {
    //split CIDR block into the network address and the subnet mask
    //This returns an array where I can access the indices
    var splitBlock = cidrBlock.split('/')
    console.log(splitBlock)

    //NETWORK ADDRESS
    //First split '98.210.237.192' on the .
    let networkAddress = splitBlock[0].split('.')
    //console.log(networkAddress, "network address")
    
    //Convert network address to binary
    let networkString = ''

    for (let i = 0; i < networkAddress.length; i++) {       
        let networkInBinary = (((networkString += networkAddress[i]) >>> 0).toString(2));

        console.log(typeof networkInBinary, networkInBinary)       
    }
    
    //SUBNET MASK
    let subnetMask = parseInt(splitBlock[1])
    console.log(typeof subnetMask, subnetMask)
    
    const logFullSubnetAddress = (subnetMask) => {
        let subnetAddress =''

        for(i = 0; i < subnetMask; i++){
            subnetAddress += '1'                
            
            console.log(subnetAddress, "subnetAddress")
        } 

        while (subnetAddress.length <= 31){

            subnetAddress += 0
            console.log(subnetAddress, "subnetAddress")
            console.log(subnetAddress.length, "subnetAddress length")
            console.log("did I call my function?")
        }
    }

    logFullSubnetAddress(subnetMask)        
}

    const ipInSubnetComparison = (unsignedInteger, CIDRBock) => {
        unsignedIntegerToBinary(unsignedInteger)        
        splitAndConvertCIDRBlock(CIDRBock)
    }
    