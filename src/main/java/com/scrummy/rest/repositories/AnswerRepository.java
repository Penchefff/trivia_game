package com.scrummy.rest.repositories;

import com.scrummy.rest.models.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
