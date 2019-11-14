using System;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;
using Examportal.Custom_Models;

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
            int i;
            string examcode = HttpContext.Request.Headers["examCode"].ToString();
            int pageNum = Int32.Parse(HttpContext.Request.Query["pageNumber"]);
            var ques = db.Questions.Where(s => s.ExamCode == examcode).Skip(pageNum).Take(1).Select(a=> new {a.AnswerType,a.Option1,a.Option2,a.Option3,a.Option4,_id = a.Id,a.QuestionImage,a.QuestionText }).ToList();

            var lastQuestion = db.Questions.Where(s => s.ExamCode == examcode).OrderByDescending(key => key.Id).Select(a=> new { _id = a.Id,   QuestionText = a.QuestionText}).ToList();

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

        //[Authorize]
        [Route("question")]
        [HttpPost]
        public IActionResult SaveCandidateAnswers([FromBody] string value)
        {
            return Ok();
        }

    }
}

