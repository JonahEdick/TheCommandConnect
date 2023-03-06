package tccServer.RestControllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testRestController implements RestControll {
    
    @GetMapping("/test")
    public String testing(){
        return "Test Controller Works!";
    }
}
