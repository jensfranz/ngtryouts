package de.franz.homepage.rest;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

@Path("/unauthorized")
public class Unauthorized {
    /**
     * Workarounds the basic auth popup in browsers by removing the content of the WWW-Authenticate header of the response.
     *
     * @param response injected response
     * @return statuscode 401
     * @see <a href="http://stackoverflow.com/questions/10158877/how-to-change-response-before-send">http://stackoverflow.com/questions/10158877/how-to-change-response-before-send</a>
     * @see <a href="http://stackoverflow.com/questions/9859627/how-to-prevent-browser-to-invoke-basic-auth-popup-and-handle-401-error-using-jqu">http://stackoverflow.com/questions/9859627/how-to-prevent-browser-to-invoke-basic-auth-popup-and-handle-401-error-using-jqu</a>
     */
    @GET
    public Response unauthorized(@Context final HttpServletResponse response) {
        response.setHeader("WWW-Authenticate", "");
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }
}
