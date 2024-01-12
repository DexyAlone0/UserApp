using UserApp.API.Entity;

namespace UserApp.API.Request
{
    public class CreateUserCommandRequest
    {
        public long IdentityNumber { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public DateTime SignUpDate { get; set; }
        public int UserTypeId { get; set; }
        public virtual UserType UserType { get; set; }
    }
}
