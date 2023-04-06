/* helper function which reutns an object, with KVP w/ five random values betweemn 0 - 49 */



const getFive = () => {
    const getRando = () => {
     let n = Math.floor(Math.random() * 50 -1) /* Gets a number 0 - 49 */
       return n
    }
    return {
      a: getRando(),
      b: getRando(),
      c: getRando(),
      d: getRando(),
      e: getRando() 
    }
}

export default getFive; 