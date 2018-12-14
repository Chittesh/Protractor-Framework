var RandomValues_page = function() { 
      this.getSSNNumberInSplitFormat = function(){
            var str = this.getRandomNumber(3) + "-" + this.getRandomNumber(2) + "-" + this.getRandomNumber(4)
            return str.toString();
      }
      this.getNumberInSplitFormat = function() {
            var str = this.getRandomNumber(3) + "-" + this.getRandomNumber(3) + "-" + this.getRandomNumber(4)
            return str.toString()
      }
       
      this.getRandomNumber = function(number){
            if(number == 3)
            {
                  return Math.floor(Math.random() * 1000).toString();
            }

            if(number == 2)
            {
                  return Math.floor(Math.random() * 100).toString();
            }

            if(number == 4)
            {
                  return Math.floor(Math.random() * 10000).toString();
            }

            if(number == 10)
            {
                  return Math.floor(Math.random() * 10000000000).toString();
            }

            if(number == 5)
            {
                  return Math.floor(Math.random() * 100000).toString();
            }

            if(number == 6)
            {
                  return Math.floor(Math.random() * 1000000).toString();
            }

            if(number == 9)
            {
                  return Math.floor(Math.random() * 1000000000).toString();
            }
      }    
}
         
module.exports = new RandomValues_page;    