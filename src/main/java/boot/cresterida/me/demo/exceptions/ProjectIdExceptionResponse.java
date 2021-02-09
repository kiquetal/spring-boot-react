package boot.cresterida.me.demo.exceptions;



public class ProjectIdExceptionResponse {

    private String projectException;

    public String getProjectException() {
        return projectException;
    }

    public void setProjectException(String projectIdentifier) {
        this.projectException = projectIdentifier;
    }

    public ProjectIdExceptionResponse(String projectException) {
        this.projectException = projectException;
    }
}
