// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   
    let obj = {};

    if(currency <= 0){
        return {};
    }
    if(currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    if(currency >= 50){
        obj.H =parseInt(currency/50);
        currency = currency - obj.H * 50;
    }
    if(currency >= 25){
        obj.Q =parseInt(currency/25);
        currency = currency - obj.Q * 25;
    }
    if(currency >= 10){
        obj.D =parseInt(currency/10);
        currency = currency - obj.D * 10;
    }
    if(currency >= 5){
        obj.N =parseInt(currency/5);
        currency = currency - obj.N * 5;
    }
    if(currency >= 1){
        obj.P =parseInt(currency/1);
        currency = currency - obj.P * 1;
    }

    return obj;

}
