using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Handlers
{
    public class QuestionHandler
    {
        public string radioOrCheckBoxValue(dynamic value)
        {
            string joinValue;
            int len = value.CheckedOption.Length;
            Console.WriteLine(value.CheckedOption.GetType());
            if(len == 1)
            {
                joinValue = string.Join("",value.CheckedOption);
            }
            else
            {
                joinValue = string.Join(" ", value.CheckedOption);
            }

            return joinValue;
        }

        public void SaveCorrectOption(dynamic checkAnswer, dynamic existingAnswer)
        {

        }

        public void SaveIncorrectOption(dynamic checkAnswer, dynamic existingAnswer)
        {

        }
    }
}
