		function loadObjFile(url)
		{
		    var req = new XMLHttpRequest();
		    req.onreadystatechange = function () { processLoadObj(req) };
		    req.open("GET", url, true);
		    req.responseType = "text";
		    req.send(null);
		}
		
		function createObj(objDataIn)
		{
		   if( shaderProgArray[0] && shaderProgArray[1])
		   {
		      //创建绘制用的物体
			ooTri=new ObjObject(gl,objDataIn.vertices,objDataIn.normals,shaderProgArray[0]);
			mbTri = new mbObject(gl,objDataIn.vertices,objDataIn.normals,shaderProgArray[1]);

           }
		   else
		   {
		      setTimeout(function(){createObj(objDataIn);},10);
		   }
		}
		
		function processLoadObj(req)
		{
		    if (req.readyState == 4) 
		    {
		        var objStr = req.responseText;	       
		        var dataTemp=fromObjStrToObjectData(objStr);	
		        createObj(dataTemp);                     
		    }
		} 