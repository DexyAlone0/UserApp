using System.ComponentModel.DataAnnotations;
using System.Net.Mail;

namespace UserApp.API.Entity
{
    public class User
    {
        [Key]
        public int id { get; set; }
        public long? IdentityNumber { get; set; }
        public string? Email { get; set; }
        public string Name { get; set; }
        public string?  LastName { get; set; }
        public string? Password { get; set; }
        public DateTime? SignUpDate { get; set; }
        public int UserTypeId { get; set; }

        public virtual UserType UserType { get; set; }

    }
}
