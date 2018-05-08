const Rounding = {
    install(Vue,options){
        Vue.prototype.operations = (num1,num2,operator)=>{
            let n1 = num1.toString().split(".")[1] ? num1.toString().split(".")[1].length : 0;
            let n2 = num2.toString().split(".")[1] ? num2.toString().split(".")[1].length : 0;
            let bastN = n1 > n2 ? n1 : n2;
            console.log(num1,num2,operator,bastN)
            var Result;
            switch (operator){
                case '*':
                    Result = ((num1*Math.pow(10,bastN))*(num2*Math.pow(10,bastN)))/Math.pow(10,2*bastN);
                    break;
                case '/':
                    Result = ((num1*Math.pow(10,bastN))/(num2*Math.pow(10,bastN)));
                    break;
                case '+':
                    Result = ((num1*Math.pow(10,bastN))+(num2*Math.pow(10,bastN)))/Math.pow(10,2*bastN);
                    break;
                case '-':
                    Result = ((num1*Math.pow(10,bastN))-(num2*Math.pow(10,bastN)))/Math.pow(10,2*bastN);
                    break;

            }
            console.log(Result.toString().split(".")[1].length)
            //保留两位小数  例：1.00 
            var scale = Result.toString().split(".")[1] ? Result.toString().split(".")[1].length:0;
            //小数位等于0的时候 后面拼接.00
            if(scale == 0){
                return Number(Result+'.00')
            }
            //小数位等于==1的时候 后面拼接0
            if(scale == 1){
                return Number(Result+'0')
            }
            //小数位等于==2 的时候 直接返回
            if(scale == 2 ){
                return Number(Result)
            }
            //小数位等于 > 2 的时候判断小数后安第三位是否大于5 然后进行四舍五入 
            if(scale >2 ){
                var scale3 = Number(Result.toString().split(".")[1].substring(2,3))
                return scale3 >=5? Number(Result.toString().split(".")[0]+'.'+Result.toString().split(".")[1].substring(0,1)+(Number(Result.toString().split(".")[1].substring(1,2))+1)): Number(Result.toString().split(".")[0]+'.'+Result.toString().split(".")[1].substring(0,2))

            }
            return Result;

        }
    }
}

export default Rounding