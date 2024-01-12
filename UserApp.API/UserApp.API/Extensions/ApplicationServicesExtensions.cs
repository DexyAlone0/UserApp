using UserApp.API.Repository.Abstract;
using UserApp.API.Repository.Concrate;

namespace UserApp.API.Extensions
{
    public static class ApplicationServicesExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            

            return services;
        }


    }
}
