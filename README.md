# ISEC3004_Assign1_Gr16
Curtin ISEC3004 Assingment 1, Test Group 16 2022


# Instructions on How to run the web interface that has the nosql Injection vulnerability

#Install node if it is not already installed https://nodejs.org/en/download/

#Clone the repository to Visual studio code (VSCode) and navigate inside the nosql Vulnerable web application folder. 

#Open a new terminal in VSCode using "Ctrl + Shift + ~", here navigate inside the backend folder using this cd command in the terminal
"cd backend" Then run command "npm i". This will install all the necessary packages in the backend folder, as per package.json file.

#Open another terminal and navigate inside the frontend folder using "cd frontend" then run command "npm i". This will install all the necessary packages in the backend folder, as per package.json file.

#Click on the backend terminal and once the installation is complete, start backend using "npm start" command. The terminal should show as DB connected.

#Then click on the frontend terminal and once the installation is complete, start frontend using "npm start" command. This should open a brower and navigate http://localhost:3000/. This is the login page for the developed Payroll management system. The login requires authentication where the Employee ID is supposed to match the password to gain access. However the code has nosql injection vulnerability where the employee id and password and are taken as direct inputs from the user (unsanitized). 

#The vulnerability here lies directly inside the backend/routes/employee.js in the vulnerable login function where the user inputs are not sanitized and used directly which allows an attacker to pass a payload directly in to the database leading to nosql injection and allowing one to bypass the authentication and login as an administrator.

#The admin login here is admin123 and the password is new123

# How to exploit Nosql Injection vulnerability

#Inorder to exploit this web application you need to install a tool called burpsuite communicty edition. 
https://portswigger.net/burp/communitydownload. This will act as the middle man between the server and the client requests and allow the user to intercept and direct the requests. **It is important to note that this is simply a tool that helps with intercepts and not a third party program used for exploitation as we must povide the payloads ourselves and perfomr the injection based on feedback.**

#With the web application running, open Burp suite Community Edition. Navigate to the Proxy tab click on Open browser, once the browser is open navigate to http://localhost:3000/ which is the server that was started earlier. Inorder to exploit this system, the (employeeID) username is necessary, This application was programmed considering a real world scenario. It is unlikely that in the current technological society to bypass both user name and password through nosql injection. As such username (employee id) is usually retrieved by an attacker through social engineering/ phishing attacks. One possible scenario is posing as an legitimate business offering discounts for companies. The employee would need to provide company details as well as employee id to receive a discount. The username can also be derived through a brute force attack but is quite difficult. The employee id to be exploited is admin123.

#In the main login page that is directed to, by default, upon launch, input the valid employee id "admin123", the password field can be filled with any random value. Then navigate to Burpsuite > Proxy tab> Intercept tab and click to turn intercept on. Now navigate to browser and click on login button. Burpsuite will capture the request and display the data. Click forward button until the user entered employee id and password is displayed.

#Now this must be sent to the repeater to edit the request and send a payload. Click on "Ctrl + R" and navigate to the Repeater tab. Now in the repeater tab the request can be edited and it will also show the response recieved. Here we will use the $ne mongodb operator which signifies not equal in jason format.

#replace password field with {"$ne": null} which means not equal to null. This means if the entered username has a connected password that is not null it will return true. As the username/employee id exists that means the password will exist and the injection will be successful as long as the code has not been patched properly. Once replaced click on send. In the response tab user details are retrieved and displayed which means the noseql injection was successful.

#now copy the entire jason string with username and paswword with the payload; 
{"empid":"admin123","empPwd":{"$ne": null}}
and paste it back on the proxy tab with intercept is turned on. Click forward and the browser will give the prompt login successful, keep clicking on forward and you will be navigated as a logged in user. Now you can turn intercept off in Burp Suite and return to the browser where you have succeefully used nosql injection to byspass authentication.

# Note
As this is a payroll system where salary details are shown and can be edited, approved and or denied exploiting can allow an attacker to change slaries which can have great financial impact on the company.