package com.patrickgrimard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Arrays;

/**
 * Created on 2015-09-22
 *
 * @author Patrick
 */
@RequestMapping(value = "/")
@Controller
public class AwesomeController {

    private Environment env;

    @Autowired
    public AwesomeController(Environment env) {
        this.env = env;
    }

    @RequestMapping(method = RequestMethod.GET)
    public String index(Model model) {
        model.addAttribute("title", env.getProperty("title"));
        model.addAttribute("items", Arrays.asList("iPhone 6", "iPhone 6 Plus", "iPhone 6S", "iPhone 6S Plus"));
        return "index";
    }
}
