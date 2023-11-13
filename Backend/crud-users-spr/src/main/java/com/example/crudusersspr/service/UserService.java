package com.example.crudusersspr.service;

import com.example.crudusersspr.model.User;
import com.example.crudusersspr.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Page<User> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> updateUser(Long id, User newUser) {
        return userRepository.findById(id).map(user -> {
            user.setName(newUser.getName());
            user.setLastName(newUser.getLastName());
            user.setAge(newUser.getAge());
            user.setDocumentType(newUser.getDocumentType());
            user.setDocumentNumber(newUser.getDocumentNumber());
            user.setPhoto(newUser.getPhoto());
            user.setRolId(newUser.getRolId());
            return userRepository.save(user);
        });
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

}
