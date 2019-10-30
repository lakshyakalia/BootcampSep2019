using System;
using System.Collections.Generic;

namespace API_project.Models
{
    public partial class Product
    {
        public int PId { get; set; }
        public string PName { get; set; }
        public int? PPrice { get; set; }
    }
}
