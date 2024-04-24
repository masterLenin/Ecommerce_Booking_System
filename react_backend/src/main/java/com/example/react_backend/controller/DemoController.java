//package com.example.react_backend.controller;
//
//import com.example.react_backend.model.Demo;
//import com.example.react_backend.repository.DemoRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@CrossOrigin
//public class DemoController {
//
//    @Autowired
//    private DemoRepository demoRepository;
//
//    @GetMapping("/list")
//    private List<Demo> getList() {
//        return demoRepository.findAll();
//    }
//
//    @PostMapping("/setList")
//    public Map<String,Object> setList(@RequestBody Map<String,Object> body) throws InterruptedException{
//        Map<String,Object> result = new HashMap<>();
//        String name = body.get("name").toString();
//
//        Demo demo = new Demo();
//        demo.setName(name);
//
//        demoRepository.save(demo);
//        result.put("name",name);
//        return result;
//    }
//}
