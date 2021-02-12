package boot.cresterida.me.demo.utils;


import org.springframework.web.bind.annotation.ResponseBody;

@ResponseBody
public class GenericResponse {


    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public GenericResponse()
    {

    }
    public GenericResponse(String msg)
    {
        this.message=msg;


    }


}
