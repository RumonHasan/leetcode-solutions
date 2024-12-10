const countMatchingSubarrays = (nums, pattern)=>{
    const simpleBruteForceApproach = ()=>{
        let subarrayLen = pattern.length + 1;
        let counter = 0;
        for(let i = 0; i < nums.length; i++){
            for(let j = i; j < nums.length; j++){
                const substring = nums.slice(i, j + 1);
                if(substring.length === subarrayLen){
                    let prev = substring[0];
                    let patIndex = 0;
                    let check = false;
                    for(let k = 1; k < substring.length ; k++){
                        const currEl = substring[k];
                        const currPat = pattern[patIndex];
                        if(currPat === 1 && currEl > prev){
                            check = true;
                        }else if(currPat === 0 && currEl === prev){
                            check = true;
                        }else if(currPat === -1 && currEl < prev){
                            check = true;
                        }else{
                            check = false;
                            break;
                        }
                        prev = currEl;
                        patIndex++;
                    }
                    if(check){
                      
                        counter++;
                    }
                 
                }
            }
        }
        return counter;
    }
  
};

console.log(countMatchingSubarrays([1,4,4,1,3,5,5,3], [1,0,-1]))