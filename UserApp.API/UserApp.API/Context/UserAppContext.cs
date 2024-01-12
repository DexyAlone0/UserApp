using Microsoft.EntityFrameworkCore;
using UserApp.API.Entity;

namespace UserApp.API.Context
{
    public class UserAppContext : DbContext
    {
        public UserAppContext(DbContextOptions<UserAppContext> options) : base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
    }
}
