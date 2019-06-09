

var addressToValidate
var convertedIPString
var subnetAddress
var networkInBinary

//convert unsigned integer to binary
function unsignedIntegerToBinary (unsignedInteger) {
    for(i = 0, convertedIPString = ''; i < 32; i++){
        convertedIPString +=String(unsignedInteger >>>31), unsignedInteger <<=1    
        }

        return convertedIPString      
} 
    
//Log Full Subnet Address
function logFullSubnetAddress (subnetMask){
    let subnetAddressString =''

        for(i = 0; i < subnetMask; i++){
            subnetAddressString += '1'     
        } 

        while (subnetAddressString.length <= 31){
            subnetAddressString += 0                 
        }  

    let subnetAddress = parseFloat(subnetAddressString)
    //console.log(typeof subnetAddress, subnetAddress, "here is subnet address")
    return subnetAddress
}

//Split and convert CIDR block
function splitAndConvertCIDRBlock (cidrBlock)  {

    //split CIDR block into the network address and the subnet mask    
    var splitBlock = cidrBlock.split('/')
    //console.log(splitBlock)

    //NETWORK ADDRESS    
    var networkAddress = splitBlock[0].split('.')
        
    //Convert network address to binary
    var networkString = ''

    for (var i = 0; i < networkAddress.length; i++) {       
        (((networkString += networkAddress[i]) >>> 0).toString(2));                 
    }

    var networkInBinary = parseInt(networkString)    
    //console.log(typeof networkInBinary, "network address in number")
    
    //SUBNET MASK
   var subnetMask = parseInt(splitBlock[1])
    //console.log(typeof subnetMask, subnetMask, "subnet mask in number")
    
    logFullSubnetAddress(subnetMask) 

    //return networkString
    return networkInBinary
} 


const ipInSubnetComparison = (unsignedInteger, CIDRBlock) => {
    //Check for valid IP address
    

    //Call helper functions
    unsignedIntegerToBinary(unsignedInteger);        
    splitAndConvertCIDRBlock(CIDRBlock);

    //Comparison for 
    //((convertedIPString & subnetAddress) == networkInBinary)   

    if (((convertedIPString & subnetAddress) == networkInBinary) === false){
       console.log("No, " + unsignedInteger + " is not in the subnet " + CIDRBlock)
    } else if (((convertedIPString & subnetAddress) == networkInBinary) === true){
       console.log("Yes, " + unsignedInteger + " is in the subnet " + CIDRBlock)
    }
}
    
ipInSubnetComparison(0x62D2ED4B, "98.210.237.192/26")

