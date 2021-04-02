function isSimple(n) {
    if (n < 2) {
        return false;
    } for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }


let i = 0;
while (i < 100) {
    if (isSimple(i)) {
        console.log(i);
    }
    i++;
}
