using Microsoft.AspNetCore.Mvc;
using UserApp.API.Entity;
using UserApp.API.Repository.Abstract;
using UserApp.API.Repository.Concrate;
using UserApp.API.Request;

namespace UserApp.API.Controller
{
    public class UserController : ControllerBase
    {
        readonly private IUserRepository userRepository;
        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }
        [Route("AddUser")]
        [HttpPost]
        public ApiResponse AddUser([FromBody]UserRequest user) 
        {
            var users = userRepository.AddUser(user);
            return users;
        }
        [HttpPatch]
        [Route("UpdateUser/{id}")]
        public async Task<User> UpdateUser(User user)
        {
            await userRepository.UpdateUser(user);
            return user;
        }
        [Route("GetAllUsers")]
        [HttpGet]
        public List<User> GetAllUsers()
        {
            return userRepository.GetAllUsers();
        }
        [Route("DeleteUser/{id}")]
        [HttpDelete]
        public void DeleteUser(int id)
        {
            userRepository.DeleteUser(id);
        }
        [Route("LogIn")]
        [HttpGet]
        public bool LogIn(UserLoginRequest request)
        {
            var users = userRepository.LoginUser(request);
            return users;
        }

    }
}
