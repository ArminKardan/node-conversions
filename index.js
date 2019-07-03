 
 module.exports = {
	 
	StringToBase64: function (string)
	{
	  return Buffer.from(string).toString('base64');
	},

	Base64ToString: function (value)
	{ 
	  return Buffer.from(value, 'base64').toString()
	},


    StringToUTF8: function  (str){
        var result = [];
        for (var i = 0; i < str.length; i++) {
          result.push(str.charCodeAt(i));
        }
        return new Uint8Array(result);
      },
      
      UTF8ArrayToString: function (array) {
          return String.fromCharCode.apply(String, array);
      },
      
      StringToUTF16 : function (str) {
          let result = [];
          for(let i = 0; i < str.length; i++)
          {
              let number = str.charCodeAt(i);
              result.push(number&0xFF, (number>>8)&0xFF);
          }
          return new Uint8Array(result);
      }, 
      
      UTF16ArrayToString: function (arr) {
          let result = "";
          for(let i = 0; i < arr.length; i+=2)
          {
              result += (String.fromCharCode( arr[i+0]|((arr[i+1] << 8)&0xFF00)));
          }
          return result;
      },

    Int32_To_Uint8Array: function (num) {
        var farr = new Int32Array(1);
        farr[0] = num;
        return new Uint8Array(farr.buffer); 
    },

    Int16_To_Uint8Array: function (num) {
        var farr = new Int16Array(1);
        farr[0] = num;
        return new Uint8Array(farr.buffer); 
    },

    Uint32_To_Uint8Array: function (num) {
        var farr = new Uint32Array(1);
        farr[0] = num;
        return new Uint8Array(farr.buffer); 
    },

    Uint16_To_Uint8Array: function (num) {
        var farr = new Uint16Array(1);
        farr[0] = num;
        return new Uint8Array(farr.buffer); 
    },


    Float32_To_Uint8Array: function (num) {
        var farr = new Float32Array(1);
        farr[0] = num;
        return new Uint8Array(farr.buffer); 
    },

    Float64_To_Uint8Array: function (num) {
        var farr = new Float64Array(1);
        farr[0] = num;
        return new Uint8Array(farr.buffer); 
    },


















    Int32Array_To_Uint8Array: function (num) {
        var farr = new Int32Array(num.length);
        for(let i = 0; i < num.length; i++)
        {
            farr[i] = num[i];
        }
        return new Uint8Array(farr.buffer); 
    },

    Int16Array_To_Uint8Array: function (num) {
        var farr = new Int16Array(num.length);
        for(let i = 0; i < num.length; i++)
        {
            farr[i] = num[i];
        }
        return new Uint8Array(farr.buffer); 
    },

    Uint32Array_To_Uint8Array: function (num) {
        var farr = new Uint32Array(num.length);
        for(let i = 0; i < num.length; i++)
        {
            farr[i] = num[i];
        }
        return new Uint8Array(farr.buffer); 
    },

    Uint16Array_To_Uint8Array: function (num) {
        var farr = new Uint16Array(num.length);
        for(let i = 0; i < num.length; i++)
        {
            farr[i] = num[i];
        }
        return new Uint8Array(farr.buffer); 
    },


    Float32Array_To_Uint8Array: function (num) {
        var farr = new Float32Array(num.length);
        for(let i = 0; i < num.length; i++)
        {
            farr[i] = num[i];
        }
        return new Uint8Array(farr.buffer); 
    },

    Float64Array_To_Uint8Array: function (num) {
        var farr = new Float64Array(num.length);
        for(let i = 0; i < num.length; i++)
        {
            farr[i] = num[i];
        }
        return new Uint8Array(farr.buffer); 
    },















    
    Uint8Array_To_Int32: function (array)
    {
        return new Int32Array(array.buffer)[0];
    },
    Uint8Array_To_Int16: function (array)
    {
        return new Int16Array(array.buffer)[0];
    },
    Uint8Array_To_Uint32: function (array)
    {
        return new Uint32Array(array.buffer)[0];
    },
    Uint8Array_To_Uint16: function (array)
    {
        return new Uint16Array(array.buffer)[0];
    },
    Uint8Array_To_Float32: function (array)
    {
        return new Float32Array(array.buffer)[0];
    },
    Uint8Array_To_Float64: function (array)
    {
        return new Float64Array(array.buffer)[0];
    },





    Uint8Array_To_Int32Array: function (array)
    {
        return new Int32Array(array.buffer);
    },
    Uint8Array_To_Int16Array: function (array)
    {
        return new Int16Array(array.buffer);
    },
    Uint8Array_To_Uint32Array: function (array)
    {
        return new Uint32Array(array.buffer);
    },
    Uint8Array_To_Uint16Array: function (array)
    {
        return new Uint16Array(array.buffer);
    },
    Uint8Array_To_Float32Array: function (array)
    {
        return new Float32Array(array.buffer);
    },
    Uint8Array_To_Float64Array: function (array)
    {
        return new Float64Array(array.buffer);
    },





  };
 
