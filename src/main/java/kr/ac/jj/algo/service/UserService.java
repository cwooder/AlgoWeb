package kr.ac.jj.algo.service;

import kr.ac.jj.algo.domain.Authority;
import kr.ac.jj.algo.domain.User;
import kr.ac.jj.algo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("해당 학번으로 사용자를 찾을 수 없습니다. 학번: " + username));
    }

    public User loadUserById(Integer id) throws UsernameNotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("해당 번호로 사용자를 찾을 수 없습니다. 번호:" + id));
    }

    public List<User> loadUsersByAuthority(Authority authority) {
        return userRepository.findByAuthority(authority);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        user.setUpdatedAt(LocalDateTime.now());
        return userRepository.save(user);
    }

}
