module.exports = function pow(base, exp) {

    if(Number.isInteger(base) && Number.isInteger(exp)) {

        if(exp === 0) {

            if(base>0) {
                return 1
            }
            if(base<0) {
                return -1
            }
        }

        if(exp<0) {
            let res = base
            for(let i=0; i>exp+1; i--) {
                res = res*base
            }
            return res
        }

        let res = base
        let i = 0
        while (i<exp-1){
            res=res*base
            i++
        }
        return res
    }
}
