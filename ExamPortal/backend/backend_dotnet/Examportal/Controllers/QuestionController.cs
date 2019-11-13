using System;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;

namespace Examportal.Controllers
{
    [ApiController]
    public class QuestionController : ControllerBase
    {
        ExamportalContext db = new ExamportalContext();

        [Authorize]
        [Route("/question")]
        [HttpGet]
        public IActionResult TestQuestions()
        {
            Boolean lastQuesStatus;
           
            string examcode = HttpContext.Request.Headers["examCode"].ToString();
            int pageNum = Int32.Parse(HttpContext.Request.Query["pageNumber"]);
            var ques = db.Questions.Where(s => s.ExamCode == examcode).Skip(pageNum).Take(1).Select(a=> new {a.AnswerType,a.Option1,a.Option2,a.Option3,a.Option4,a.QuestionId,a.QuestionImage,a.QuestionText }).ToList();
            var lastQuestion = db.Questions.Where(s => s.ExamCode == examcode).OrderByDescending(key => key.QuestionId).Select(a=> new { a.QuestionId,a.QuestionText}).ToList();
            var c = lastQuestion[0].QuestionText;
            var b = ques[0].QuestionText;
            if (lastQuestion[0].QuestionText == ques[0].QuestionText) lastQuesStatus = true;
            else lastQuesStatus = false;
            var time = db.ExamDetails.Where(s => s.ExamCode == examcode).ToList();
            
            return Ok(new
            {
                allQuestions = lastQuestion,
                lastQuestionStatus = lastQuesStatus,
                startTime = time[0].ExamStartTime,
                duration = time[0].ExamDuration,
                examName = time[0].ExamName,
                questions = ques,
                pageNumber = pageNum
            });

        }

    }
}

