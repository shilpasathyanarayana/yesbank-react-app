# Getting Started with Create React App

This is the fullstack website for banking experience created using React,React-redux, Nodejs and typescript.

## To-Do
- ### Preparing for the Project
   - First ensure An IDE is installed
         - [Visual Studio Code](https://code.visualstudio.com)   <-----  the one I use
         - You can use any IDE available.

## Installation and setup Instruction
 - ### Ensure steps in [To-Do]  are completed.
 - ### Downloading the test project code
    - [x] Download the code from this repo Or make a clone of the project save it in your desktop
    - open the project in the IDE.
    - Click on the terminal and select new terminal for setting up the test project.

## Steps requried to install the frontEnd application
 - ### Installing the Packages required to run the project.
    - First make sure that npm and node installed globally on your machine. If you didn't installed then install using
      - ```install npm```
      - ```install nodeJs```
    - [if you are creating the react-app from scrach] 
      - open window powershell - open new window and type,
         - ```npx create-react-app name-of-the app```
         - then react app will be created at the opened location open the project and follow the following steps.
   - To install the packages i have used use the code
         - ```npm install```
         - it will install all the packages in the application

## Steps required to install the backend application
- I used NodeJs and express for the backend of the banking website
- Download the backend code from the git or clone it in your desktop
- open the code in IDE(visual studio code)
- install all the packages i have used using the code,
  - ```npm install```
- For the database I used Mysql   
- ### [To create the mysql database]:
    - Download mysql workbench software in your device.
    - open the workbench create one database [I created the database named mybank]
        - use the query  ```create database mybank```
    - In that database I created 4 tables named account_balance, accounts, login_credentials and transaction
    - ### First table account_balance has the following information with 3 coloumns and 10 rows
        - use the query -  "create table account_balance(accountnumber int , account_opening_amount int, balance int)"
          to create the table.
        - to insert the values to the table use the query - "insert into account_balance(accountnumber, account_opening_amount, balance) values(1, 1250,15)"
        - use this query the number of times you want to insert the values[if you want 5 rows use this query 5 times   with 5 different values ]

                  accountnumber	    account_opening_amount	     balance
                        1	                1250	                15
                        2	                1750	                10
                        3	                2250	                60
                        4	                250	                    55
                        5	                3250	                70
                        6	                150	                    50
                        7	                4500	                50
                        8	                1500	                50
                        9	                350	                    50
                        10	                650	                    90

    - ### Second table accounts has 5 coloums and 10 rows

                 accountnumber	        first_name	          last_name	            e_mail_address	         card_number
                        1	              Avinash	            Talpanaje	       avinash123@gmail.com	        123456789
                        2	              Shilpa	            Sathya Narayana	   shilpa123@gmail.com	        123456788
                        3	              Ruby	                Kaur	           ruby123@gmail.com	        123456787
                        4	              Preetham	            Sathya Narayana	   preetham123@gmail.com	    123456786
                        5	              Chaitra	            Talpanaje	       chaitra123@gmail.com	        123456785
                        6	              Aparna	            Mallya	           aparna123@gmail.com	        123456784
                        7	              Naveen	            Talpanaje	       naveena123@gmail.com	        123456783
                        8	              Sudarshana	        Talpanaje	       sudarshana123@gmail.com	    123456782
                        9	              Keshav	            Kundakatta	       keshav@gmail.com	            123456781
                        10	              Ishanya	            Talpanaje	       ishanya123@gmail.com	        123456780


    - ### Third table login_credential has 3 colums and 10 rows
        - need to use any of  these username and password while login the bank website otherwise it will fail to login
        - [use can use any username and password of your choice in this database]

                  accountnumber	            username	            password
                        1	                Avinash89	            Avinash@123
                        2	                Shilpa95	            Shilpa@123
                        3	                Ruby007	                Ruby@123
                        4	                Preetham45	            Preetham@123
                        5	                Chaitra94	            Chaitra@123
                        6	                Aparna94	            Aparna@123
                        7	                Naveena03	            Naveena@123
                        8	                Sudarshana98	        Sudarshana@123
                        9	                Keshav02	            Keshav@123
                        10	                Ishanya17	            Ishanya@123


    - ### Forth table transactions has 3 columns and and many rows we want[this table will be updated from the  frontend using post method of the project when ever user transaction from their accounts to any other account within the bank]. So create only table and no need to insert any values in the rows.
    - ### As this transaction will be processed the amount will be calculated and new balance will be updated in the account_balance table.

                  from_account              to_account              amount



    