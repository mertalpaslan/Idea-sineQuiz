using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace sineQuiz.Models
{

    public class quizDBContext:DbContext
    {
        public quizDBContext(DbContextOptions<quizDBContext> options):base(options)
        {

        }

        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

    }
}
