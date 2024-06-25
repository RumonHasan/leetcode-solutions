const repeatedSubstring = (s)=>{
    let sub = '';
    let totalLen = s.length;
    let currSubLen = sub.length;
    if (s.length === 1) return false;
     if (s.split('').every((letter)=> letter === s[0])) return true;
    for (let i = 0; i < s.length; i++){
        const currChar = s[i];
        sub += currChar;
        currSubLen = sub.length;
        const diff = Math.floor(totalLen / currSubLen);
 
        if (diff <= totalLen / 2 && diff * currSubLen === totalLen && currSubLen < totalLen){
           const subStringLen = totalLen / currSubLen;  
           const substring = sub.repeat(subStringLen);
           if (substring === s) return true;
        }
    };
    return false;
}

//console.log(repeatedSubstring("bb"));