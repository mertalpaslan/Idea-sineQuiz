using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sineQuiz.Models
{
    public class Answer
    {
        public int AnswerId { get; set; }
        public string Body { get; set; }
        public bool IsCorrect { get; set; } = false;
        public int QuestionId { get; set; }
        public Question Question { get; set; }
    }
}
