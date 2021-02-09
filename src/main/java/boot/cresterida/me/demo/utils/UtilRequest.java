package boot.cresterida.me.demo.utils;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

public class UtilRequest {



    public static Map<String,String> obtainError(BindingResult bindingResult)
    {

        Map<String,String> errorMap = new HashMap<>();
        for (FieldError error: bindingResult.getFieldErrors())
        {
            errorMap.put(error.getField(),error.getDefaultMessage());
        }

        return errorMap;

    }

}
