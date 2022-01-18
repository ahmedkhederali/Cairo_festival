const useGeners=(selectedGeners)=>{
    if(selectedGeners.length<1) return ""
    const GenersIds=selectedGeners.map(e=>e.id)
    return GenersIds.reduce((accu,curr)=>accu+','+curr)
    //reduce like that 

    /*
    if we have an array like 
    1
    2
    3
    4
     after using this reduce it will become 
     1,2,3,4
    
    
    */
}
export default useGeners;