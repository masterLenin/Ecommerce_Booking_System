package com.example.react_backend.controller;

import com.example.react_backend.model.Watch;
import com.example.react_backend.repository.WatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/watch")
public class WatchController {

    @Autowired
    private WatchRepository watchRepository;


    @GetMapping("/list")
    private List<Watch> getList() {
        return watchRepository.findAll();
    }

    @PostMapping("/setList")
    public Map<String,Object> setList(@RequestBody Map<String,Object> body) throws InterruptedException{
        Map<String,Object> result = new HashMap<>();
        String name = body.get("name").toString();
        String img = body.get("img").toString();
        String type = body.get("type").toString();
        String price = body.get("price").toString();
        String totalProducts = body.get("totalProducts").toString();

        Watch watch = new Watch();
        watch.setName(name);
        watch.setImg(img);
        watch.setType(type);
        watch.setPrice(price);
        watch.setTotalProducts(totalProducts);

        watchRepository.save(watch);
        result.put("name",name);
        result.put("img",img);
        result.put("type",type);
        result.put("price",price);
        result.put("totalProducts",totalProducts);
        return result;
    }

    @PutMapping("/setCart/{id}")
    public void setCart(@RequestBody Map<String,Object> body,@PathVariable("id") Long id) throws  InterruptedException{
        String numOfCart = body.get("numOfCart").toString();

        Watch watch = watchRepository.findById(id).orElseThrow(null);
        watch.setNumOfCart(numOfCart);

        watchRepository.save(watch);
    }

    @PutMapping("/setTotalProducts/{id}")
    public void setTotalProducts(@RequestBody Map<String,Object> body,@PathVariable("id") Long id) throws  InterruptedException{
        String totalProducts = body.get("totalProducts").toString();

        Watch watch = watchRepository.findById(id).orElseThrow(null);
        watch.setTotalProducts(totalProducts);

        watchRepository.save(watch);
    }

    @PutMapping("/setLike/{id}")
    public void setLike(@RequestBody Map<String,Object> body,@PathVariable("id") Long id) throws  InterruptedException{
        String likedMe = body.get("likedMe").toString();

        Watch watch = watchRepository.findById(id).orElseThrow(null);
        watch.setLikedMe(likedMe);

        watchRepository.save(watch);
    }
}
