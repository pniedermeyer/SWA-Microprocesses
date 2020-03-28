package org.o7planning.hellorestful;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;



public class DBConnection {
	
    private static final String DB_DRIVER = "";
	private static final String DB_CONNECTION = "";
	private static final String DB_USER = "";
    private static final String DB_PASSWORD = "";
    
    
 /**
  * Baut eine Verbindung zu einer MySQL-Datenbank auf   
  * @return
  */
public static Connection getDBConnection() {

		Connection dbConnection = null;

		try {

			Class.forName(DB_DRIVER);

		} catch (ClassNotFoundException e) {

			System.out.println(e.getMessage());
		}
		try {
			System.out.println("Connecting to a selected database...");
			dbConnection = DriverManager.getConnection(
                            DB_CONNECTION, DB_USER,DB_PASSWORD);
			System.out.println("Connected database successfully...");

			return dbConnection;

		} catch (SQLException e) {

			System.out.println(e.getMessage());

		}
		return dbConnection;
	}
}
