namespace UserApp.API.Request
{
    public class UserRequest
    {
        public long IdentityNumber { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public DateTime SignUpDate { get; set; }
    }
}
