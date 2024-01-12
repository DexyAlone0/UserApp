namespace UserApp.API.Request
{
    public class UserUpdateModel
    {
        public int Id { get; set; }
        public string IdentityNumber { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public DateTime SignUpDate { get; set; }
        // Diğer güncellenecek alanları buraya ekleyin
    }

}
