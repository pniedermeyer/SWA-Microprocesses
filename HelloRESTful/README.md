Zum starten des Registrierungs Microservice, nutzen eines tomcat7 Servers mit Hilfe von Maven Build.
Genaueres zum Server befindet sich in der web.xml.

Der Server wird dann Lokal gestartet unter http://localhost:8080/Register.
Der Port auf dem der Server läuft, kann in der pom.xml im <build> angegeben werden.
Dort befinden sich auch weiter Serverinformationen.
  
Die Klasse DBCOnnection.java enthält den Aufbau der Verbindung der Datenbank. 
Dort muss folgendes Angegeben werden, um auf eine Datenbank zuzugreifen:
   DB_DRIVER: Driver
   DB_CONNECTION: Verbindung zu der Datenbank
   DB_USER: Benutzer
   DB_PASSWORD: Passwort
   
Datenbank Register enthält die Spalten:
  - nickname
  - password
  - email 
  - id
  
  Datenbank login enthält die Spalten:
  - nickname
  - password
  - eingeloggt
  - id
  
