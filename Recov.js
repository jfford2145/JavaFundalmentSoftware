String Email = request.getParameter("email");
String recovery = request.getParameter("recovery");
MyDb db = new MyDb();
Connection con = db.getCon();
try {
Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery("select * from user where uname = '"+recovery+"'");
if(rs.next()){
out.println(recovery);
}
} catch (SQLException ex) {
Logger.getLogger(Login.class.getName()).log(Level.SEVERE, null, ex);
}
