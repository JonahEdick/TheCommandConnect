package tccServer.RestControllers.UserControllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import tccServer.RestControllers.RestControll;

@RestController
public class newUserController implements RestControll {

    @PostMapping("/user")
    public String newUser(){
        return "New User Add";
    }

}
