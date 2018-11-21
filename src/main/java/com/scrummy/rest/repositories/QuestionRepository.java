package com.scrummy.rest.repositories;

import com.scrummy.rest.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
