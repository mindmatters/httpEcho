# httpEcho
Simple http echo server 

This server starts an http listener and gives back some results.

# JSON Files
The package seeks two files in the root of the project:
bodyStandard.json - what to send as the body
headerStandard.json - what to send as the header

# Parameters
-s defines the statuscode to be send  
-h show a help page and exit   
-p set the listening port for the server  
-e use a different headerfile instead of headerStandard.json  
-b use a different bodyfile instead of bodyStandard.json  
  
if you use yarn you can use the following scripts: 
  
yarn runok - runs with statuscode 200   
yarn runfail - runs with statuscode 404  
yarn runserverfail - runs with statuscode 500   


