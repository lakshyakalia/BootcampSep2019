using System;
using System.Collections.Generic;

namespace Cyberecom.Models
{
    public partial class Brand
    {
        public int Pid { get; set; }
        public int Bid { get; set; }
        public string Bname { get; set; }

        public Brand P { get; set; }
        public Brand InverseP { get; set; }
    }
}
