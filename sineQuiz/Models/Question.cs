using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sineQuiz.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Body { get; set; }
        public int QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public virtual List<Answer> Answers { get; set; }

        internal ActionResult<Question> Include(Func<object, object> p)
        {
            throw new NotImplementedException();
        }
    }
}
