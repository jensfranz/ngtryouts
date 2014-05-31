package de.franz.homepage.rest;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

@Path("/logout")
public class Logout {

    @GET
    @Produces(MediaType.TEXT_HTML)
    public String logout(@Context HttpServletRequest req) throws ServletException {
        req.logout();
        return "logged out";
    }
}
