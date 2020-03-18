package org.o7planning.hellorestful;


import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import org.json.JSONArray;
import org.json.JSONObject; 


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
 
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;



@Path("/register")
public class Registrierung{
    Connection dbConnection = null;
    PreparedStatement preparedStatement = null;
    String nickname;
    String password;
    String email;
    int id;
    int eingeloggt;

    public Registrierung() throws SQLException{
        this.nickname = nickname;
        this.password = password;
        this.email = email;
        this.id = id;
        this.eingeloggt = eingeloggt;

    }

    /* 
    Rest verbindung
    Bekommt die eingegebenen Registrieungsdaten von der UI via Rest in JSON Format übergeben
    Übergibt das empfangene JSON Objekt an jsonEntpacken()
     */
   
    
    @POST
    @Produces("application/json")
    public JSONObject getRegister_JSON(JSONObject objs)throws SQLException{
        //Rest Verbindung
        JSONObject obj = new JSONObject();
        
 
        jsonEntpacken(obj);
        return objs;
    }

    /* 
    Wandelt das empfangene JSOn Objekt in ein Registrierungs objekt um 
    Ruft die Methode registrierungInDBAnlegen() mit dem Registrierungsobjekt auf
    Ruft die Methode loginInDBAnlegen() mit dem Registrierungsobjekt auf
     */
    public void jsonEntpacken(JSONObject obj)throws SQLException{
        Registrierung reg = new Registrierung();

        reg.nickname =  obj.getJSONObject("").getString("nickname");
        reg.password =  obj.getJSONObject("").getString("password");
        reg.email    =  obj.getJSONObject("").getString("email");
        reg.eingeloggt = 0;
        
        registrierungInDBAnlegen(reg);
        loginInDBAnlegen(reg);
        
        
    }

    /*
    * Fügt eine neue Registrieung in die Registrierungs Datenbank
    * Bekommt ein Registrierungs Objekt übergeben
    * @ nickname enthält den Benutzernamen
    * @ password enthält das Passwort
    * @ email enthält die email des Benutzers
    */ 
    public void registrierungInDBAnlegen(Registrierung reg)throws SQLException{
        String insertTableSQL = "INSERT INTO registrierung (nickname, password, email) VALUES (?,?,?)";
     	String selectTableSQL = "SELECT MAX(id) as id FROM registrierung";

        try {
            dbConnection = DBConnection.getDBConnection();

            preparedStatement = dbConnection.prepareStatement(insertTableSQL);
            preparedStatement.setString (1, reg.nickname);
            preparedStatement.setString (2, reg.password);
            preparedStatement.setString (3, reg.email);
            preparedStatement.executeUpdate();

            preparedStatement = dbConnection.prepareStatement(selectTableSQL);
			ResultSet rs1 = preparedStatement.executeQuery();
			 
			 while(rs1.next()){
		         //Retrieve by column name
				 this.id  = rs1.getInt("id");

		         //Display values
		         System.out.print("ID: " + this.id);

		      }
	
			System.out.println("Record is inserted into DBUSER table!"); 

            
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } finally {
			if (preparedStatement != null) {
				preparedStatement.close();
			}
	
			if (dbConnection != null) {
				dbConnection.close();
			}
		}
    }
    

    public static void main(String[] args) throws SQLException {
        /*Registrierung reg = new Registrierung();
        reg.nickname = "Hallo";
        reg.password = "Stahl";
        reg.email = "hallo";
        System.out.println(reg.nickname);*/
      }
}
