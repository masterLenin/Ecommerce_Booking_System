package com.example.react_backend.repository;

import com.example.react_backend.model.Watch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchRepository extends JpaRepository<Watch,Long> {

}
