package de.franz.homepage.rest;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;

@Path("/error")
public class Error {

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
                "Error\n" +
                "</body>\n" +
                "</html>";
    }

    @POST
    public Response postaction(@Context final HttpServletResponse response) throws IOException {
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }
}
