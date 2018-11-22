package com.scrummy.rest.services;

import com.scrummy.rest.models.User;

import java.util.List;

public interface UserService {

    List<User> getTopUsers();

    void saveUser(User user);
}
