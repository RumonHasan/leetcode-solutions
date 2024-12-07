const repeatedStringMatching = (a, b)=>{
    const kmpAlgoRunThrough = ()=>{
        let maxRepeatedCount = Math.ceil(b.length / a.length) + 1;
        let minReapeatedCount = Math.ceil(b.length / a.length);
    
        const kmpAlgoCheck = (string) => {
            let map = new Map();
            let setChars = new Set([...string.split('')]);
            let val = 1;
            for(let char of setChars) {
                map.set(char, val);
                val++;
            }
            
            const MOD = 1e9 + 7; // Use a large prime number as modulo
            const BASE = 10;
            
            // Getting the pattern value
            let patternVal = 0;
            for(let i = 0; i < b.length; i++) {
                const char = b[i];
                const hashVal = map.get(char);
                patternVal = (patternVal * BASE + hashVal) % MOD;
            }
    
            // Sliding window
            let checkPatVal = 0;
            // Calculate the value of largest power of BASE
            let power = 1;
            for(let i = 0; i < b.length - 1; i++) {
                power = (power * BASE) % MOD;
            }
    
            // Calculate initial window hash
            for(let i = 0; i < b.length; i++) {
                const char = string[i];
                const hashVal = map.get(char);
                checkPatVal = (checkPatVal * BASE + hashVal) % MOD;
            }
            
            if(checkPatVal === patternVal) return true;
            
            // Slide the window
            for(let i = b.length; i < string.length; i++) {
                // Remove leftmost digit
                const leftChar = string[i - b.length];
                checkPatVal = (checkPatVal - (map.get(leftChar) * power % MOD) + MOD) % MOD;
                
                // Add new digit
                checkPatVal = (checkPatVal * BASE + map.get(string[i])) % MOD;
                
                if(checkPatVal === patternVal) return true;
            }
            
            return false;
        };
    
        const checkMin = kmpAlgoCheck(a.repeat(minReapeatedCount));
        if(checkMin) return minReapeatedCount;
        
        const checkMax = kmpAlgoCheck(a.repeat(maxRepeatedCount));
        if(checkMax) return maxRepeatedCount;
        
        return -1;
    }

    // using general includes function
    const simpleSolution = ()=>{
        let maxRepeatedCount = Math.ceil(b.length / a.length) + 1;
        let minReapeatedCount = Math.ceil(b.length / a.length);

        if(a.repeat(minReapeatedCount).includes(b)){
            return minReapeatedCount;
        };
        if(a.repeat(maxRepeatedCount).includes(b)){
            return maxRepeatedCount;
        }

            return -1;
    }

    console.log(simpleSolution());
 
};

console.log(repeatedStringMatching("bcacbcbbbbbbbacbcaacbccaa", "bbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaaa"));