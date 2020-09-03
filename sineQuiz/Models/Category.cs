using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sineQuiz.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; } // nvarchar(100) 2GB

        public virtual List<Quiz> Quizzes { get; set; }
    }
}
