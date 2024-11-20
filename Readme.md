


1- Front End backend ordner erstellt 
2- react install für front end 
3 - node install für haupt ordner 
4- packages install 
5-server backend erstellt port 5000
6- port in .env ändern
7 -routes ordner erstellt um die routen aufzubauen angefngen mot auth.routes.js (ligin register und logout )

8-controller erstellen wo die gesamte logiks für login register und logout aufbauen  
9- mongodb verbinden 
10 - usermodel erstellt in model ordner

11- anhand bcrypt password hashed 
12-anhand jwt tocken tocken erstellen wennn der user sich registriert hat :
openssl rand -base64 32 => checken der tocken secret und erstellt eins dann kopieren und eintragen in der JWT_SECRET

13- in utils generateToken function erstellt und tocken der registrierte user eingetragen 

14-Login function beendet if user generateTokenAndSetCookie(user._id, res); tocken gegebn
15- logout funtion beendet and cleared coockies 

16-message models erstellt 
17- message router 
message controller erstellt 
18- middelware ordner ertsllt mit protectRoute damit wir checken obder user den tocken hat und ob er berächtigt in die massge route 
19 coockie parser damit protectRoute kann zugrefien in der cookie der token und vergleichen 
20-