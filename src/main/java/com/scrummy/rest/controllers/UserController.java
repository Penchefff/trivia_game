package com.scrummy.rest.controllers;

import com.scrummy.rest.json.JsonUser;
import com.scrummy.rest.models.User;
import com.scrummy.rest.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<JsonUser>> getTopUsers() {

        List<JsonUser> topUsers = userService.getTopUsers()
                .stream()
                .map(u -> JsonUser.builder()
                        .id(u.getId())
                        .username(u.getUsername())
                        .score(u.getScore())
                        .build())
                .collect(Collectors.toList());

        return new ResponseEntity<>(topUsers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity saveUser(@RequestBody JsonUser user) {

        userService.saveUser(User.builder()
                .username(user.getUsername())
                .score(user.getScore())
                .build());
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
