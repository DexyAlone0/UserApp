using UserApp.API.Entity;
using UserApp.API.Request;

namespace UserApp.API.Repository.Abstract
{
    public interface IUserRepository
    {
        ApiResponse AddUser(CreateUserCommandRequest user);
        bool LoginUser(UserLoginRequest user);
        Task<User?> UserLoginAsync(UserLoginRequest user);
        void DeleteUser(int id);
        Task<User> UpdateUser(User user);
        List<User> GetAllUsers();

    }
}
