/*config 

list to check whether url in get req will be accepted
in turn used to determine url valid state, I.e it will 
know before a get request will be sent whether it should work or not */


const approvedDogs = [
    
    "cockapoo",
    "coonhound",
    "germanshepherd"
]

export default approvedDogs;