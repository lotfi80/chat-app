
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
20- users router erstellt 
21- user.controllers erstellt to get all users online expeting me for the sidebar 

22 ### time to work on the front end folder 
 - to do for the backend later putting the soket IO for the real time messages

 23 - installed tailwind and daisy UI 
 24- in "src" ordner ein ordner "pages" erstellt 
 25 im pages ordner 3 ordnern erstellen "login" "signup" and "home" in jeweils 
 eine datei login signup und home erstellt 

 26- die login seite erstellt und bearbeitet danach signup ( jedes male in app.jsx ein compoenent erstellen Login bearbeiten , wenn fertig auskommentieren von app.jsx und erstelle der nächte )

 27 in signup odrner eine GenderCheckbox.jsx erstellt wo ich habe die component checkbox für register 
  18- Home page erstellen bearbeiten in home ordner 

  29- in component ein ordner sidebar => mit 2 datein Sidebar und SearchInput 
   
30 icons holen react icons für search 

31 Conversation und Conversations erstellt 

32 - paar einzele Conversation in der Component Conversations eingepackt und avatr von Daisy UI 

33-routes erstellt für login signu home 

34- input für signup functions erstellt auch für  checkbox gender 



