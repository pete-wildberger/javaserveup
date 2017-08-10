package hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class GreetingController {

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", required=false, defaultValue="Peter") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }
    @RequestMapping(value = "/hello", method = RequestMethod.POST)
        public ResponseEntity < String > checkBody(@RequestBody String name) {
          String peter = "peter";
            if ( name == peter) {
              System.out.println(name);
              System.out.println(peter);
                return ResponseEntity.status(HttpStatus.OK ).build();
            } else {
            System.out.println(name);
            System.out.println(peter);
            return new ResponseEntity<String>("Hello World", HttpStatus.I_AM_A_TEAPOT);
          }
        }

}
