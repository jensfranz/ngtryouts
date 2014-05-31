package de.franz.homepage.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/login")
public class Login {

    // This method is called if HTML is request
    @GET
    @Produces(MediaType.TEXT_HTML)
    public String sayHtmlHello() {
        return "<html>\n" +
                "\n" +
                "<head>\n" +
                "    <title>Login Page</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "\n" +
                "<h2>Hello, please log in:</h2>\n" +
                "<br><br>\n" +
                "\n" +
                "<form action=\"j_security_check\" method=post>\n" +
                "    <p><strong>Please Enter Your User Name: </strong>\n" +
                "        <input type=\"text\" name=\"j_username\" size=\"25\">\n" +
                "\n" +
                "    <p>\n" +
                "\n" +
                "    <p><strong>Please Enter Your Password: </strong>\n" +
                "        <input type=\"password\" size=\"15\" name=\"j_password\">\n" +
                "\n" +
                "    <p>\n" +
                "\n" +
                "    <p>\n" +
                "        <input type=\"submit\" value=\"Submit\">\n" +
                "        <input type=\"reset\" value=\"Reset\">\n" +
                "</form>\n" +
                "</body>\n" +
                "</html>";
    }
}
