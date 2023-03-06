package tccServer;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import tccServer.RestControllers.*;

@SpringBootApplication
@RestController
public class TccServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(TccServerApplication.class, args);
		List<RestControll> restControllers = new ArrayList<>();
		restControllers.add(new testRestController());
	}

	@GetMapping("/")
	public String landingPage(){
		return "Welcome to Command Connect!";
	}

	@GetMapping("/hello")
	public String hello(){
		return "Hello";
	}

	
}
