String name = request.getParameter("name");
String pass = request.getParameter("pass");
String email = request.getParameter("email");
MyDb db = new MyDb();
Connection con = db.getCon();
try {
Statement stmt =  con.createStatement();
stmt.executeUpdate("insert into user (uname,upass,email)values('"+name+"','"+pass+"','"+email+"')");
out.println("data inserted sucessfully");
} catch (SQLException e) {
e.printStackTrace();
}
