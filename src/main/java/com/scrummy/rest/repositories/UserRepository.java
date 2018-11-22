package com.scrummy.rest.repositories;

import com.scrummy.rest.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

    @Query(nativeQuery = true,
    value = "SELECT * FROM USERS ORDER BY SCORE DESC LIMIT :limit")
    List<User> getTopUsers(int limit);

}
