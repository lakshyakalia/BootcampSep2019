using System;
using System.Collections.Generic;

namespace API_project.Models
{
    public partial class Order
    {
        public int BId { get; set; }
        public string PName { get; set; }
        public int? Qty { get; set; }
        public int? Price { get; set; }
    }
}
