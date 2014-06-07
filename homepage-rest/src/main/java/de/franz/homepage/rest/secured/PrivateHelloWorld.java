package de.franz.homepage.rest.secured;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;


@Path("/secured/checkauthorized")
public class PrivateHelloWorld {
    /**
     * Existing to enable clients to check whether they have access to the secured area.
     *
     * @return status ok
     */
    @GET
    public Response ok() {
        return Response.status(Response.Status.OK).build();
    }
}
