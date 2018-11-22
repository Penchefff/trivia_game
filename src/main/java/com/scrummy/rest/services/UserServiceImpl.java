package com.scrummy.rest.services;

import com.scrummy.rest.config.ScrummyConfig;
import com.scrummy.rest.models.User;
import com.scrummy.rest.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> getTopUsers() {
        return userRepository.getTopUsers(ScrummyConfig.LIMIT);
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }
}
