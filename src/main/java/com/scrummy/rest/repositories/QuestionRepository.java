package com.scrummy.rest.repositories;

import com.scrummy.rest.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query(nativeQuery = true,
            value = "SELECT * FROM QUESTIONS ORDER BY RANDOM() LIMIT :limit")
    List<Question> getQuestions(int limit);
}
