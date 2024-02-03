import { UserRepo } from '~/repos/user.repo';

export interface UserService {

}

class UserServiceLive implements UserService {
  constructor(userRepository: UserRepo) {
  }
}