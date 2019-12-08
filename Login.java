String name = request.getParameter("uname");
String pass = request.getParameter("upass");
MyDb db = new MyDb();
Connection con = db.getCon();
try {
Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery("select * from user where uname = '"+name+"'");
if(rs.next()){
out.println("Login Sucessfully");
}
} catch (SQLException ex) {
Logger.getLogger(Login.class.getName()).log(Level.SEVERE, null, ex);
}
