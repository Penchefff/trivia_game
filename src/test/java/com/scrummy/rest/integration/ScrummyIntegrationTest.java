package com.scrummy.rest.integration;

import com.scrummy.rest.RestApplication;
import com.scrummy.rest.models.Question;
import com.scrummy.rest.repositories.QuestionRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = RestApplication.class)
@ActiveProfiles("test")
public class ScrummyIntegrationTest {

    @Autowired
    QuestionRepository repository;

    @Test
    public void TestDb() {
        assertEquals(0, repository.findAll().size());

        Question question = Question.builder().text("test").build();
        repository.save(question);

        assertEquals(1, repository.findAll().size());
    }
}
