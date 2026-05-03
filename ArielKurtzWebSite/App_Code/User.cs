public class User
{
    public string username;
    public string password;
    public string firstName;
    public string lastName;
    public string dob;
    public string city;
    public string phone;
    public string email;

    public string Insert()
    {
        return "INSERT INTO users (username, password, firstName, lastName, dob, city, phone, email) VALUES (" +
               "N'" + username + "', " +
               "N'" + password + "', " +
               "N'" + firstName + "', " +
               "N'" + lastName + "', " +
               "N'" + dob + "', " +
               "N'" + city + "', " +
               "N'" + phone + "', " +
               "N'" + email + "')";
    }
}