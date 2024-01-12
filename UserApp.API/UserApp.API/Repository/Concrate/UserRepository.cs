using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserApp.API.Context;
using UserApp.API.Entity;
using UserApp.API.Extensions;
using UserApp.API.Repository.Abstract;
using UserApp.API.Request;

namespace UserApp.API.Repository.Concrate
{
    public class UserRepository : IUserRepository
    {
        readonly private UserAppContext context;
        

        public UserRepository(UserAppContext context)
        {
            this.context = context;
        }

        public void DeleteUser(int id)
        {
            var users = context.Users.Find(id);
            context.Users.Remove(users);
            context.SaveChanges();

        }
        

        public async Task<User?> UserLoginAsync(UserLoginRequest user)
        {
            return await context.Set<User>().FirstOrDefaultAsync(x => x.Password == user.Password && x.Email == user.Email);


        }
        

        public ApiResponse AddUser(CreateUserCommandRequest user)
        {
            User users = new User
            {
                IdentityNumber = user.IdentityNumber,
                Name = user.Name,
                LastName = user.LastName,
                Email = user.Email,
                Password = user.Password,
                SignUpDate = user.SignUpDate,
                UserTypeId = user.UserTypeId
                
            };
            ApiResponse response = new ApiResponse();
            if (users != null)
            {
                context.Users.Add(users);
                response.Success = "Başarılı bir şekilde kayıt oldunuz.";
                context.SaveChanges();
            }
            else
            {
                response.Error = "Eksik veya hatalı işlem";
            }
            return response;
        }
       
        public async Task<User> UpdateUser(User user)
        {
            context.Entry(user).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return user;
        }

        public List<User> GetAllUsers()
        {
            return context.Users.ToList();
        }

        public bool LoginUser(UserLoginRequest user)
        {
            throw new NotImplementedException();
        }
    }
}
