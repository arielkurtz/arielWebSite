using System.Data;
using System.Data.SqlClient;

public class Helper
{
    public static string connectionString =
        @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database.mdf;Integrated Security=True";

    public static int ExecuteNonQuery(string sql)
    {
        SqlConnection con = new SqlConnection(connectionString);
        SqlCommand cmd = new SqlCommand(sql, con);

        con.Open();
        int result = cmd.ExecuteNonQuery();
        con.Close();

        return result;
    }
}