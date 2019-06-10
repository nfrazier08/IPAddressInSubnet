# IPAddressInSubnet

Walk-though:

Working backwards, there were a few things that needed to happen first before I could make the comparison to determine if a given IP address is in a subnet. 

I first needed to convert the string form of the IP address into binary. From there, I needed to split the CIDR block on the forward slash to get the network address, which remains constant for the range of hosts in a subnet, and also conver the network address into binary and define the subnet mask in binary. 

After my variables were converted into binary form, I was able to make the comparison:

((convertedIPString & subnetAddress) == networkInBinary)

I used the bitwise AND logic for the comparison from the following sentence in a Wikipedia article I found on subnetting:

"For IPv4, a network may also be characterized by its subnet mask or netmask, which is the bitmask that when applied by a bitwise AND operation to any IP address in the network, yields the routing prefix."

Article: https://en.wikipedia.org/wiki/Subnetwork

The bitwise AND operator applied to the IP address and subnet address should equal the routing prefix, in this case the network address, since it does not change. 


Convert unsigned integer to binary: 
https://en.wikipedia.org/wiki/Subnetwork
http://www-personal.umich.edu/~parsec/information/code/ip_calc.js.txt
https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
https://gist.github.com/faisalman/4213592
https://stackoverflow.com/questions/9954757/javascript-convert-integer-to-array-of-bits
https://stackoverflow.com/questions/8105629/ip-addresses-stored-as-int-results-in-overflow/23589224#23589224
http://www-personal.umich.edu/~parsec/information/code/ip_calc.js.txt
https://www.npmjs.com/package/ip-address
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators


