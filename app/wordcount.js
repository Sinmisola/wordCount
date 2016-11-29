
app={

	words: function(str)
		{
		   var newStr = str.replace(/\n|\t|\s\s+/g, ' '); //check for whitespace, newlines and tabs space
	         return newStr.split(' ').reduce(function(count, word)
	          {
			         count[word] = (count[word] || 0) + 1;
			         return count;
	          }, Object.create(null));  
		 
		}
    }
module.exports=app;


