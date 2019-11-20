using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Handlers
{
    public class FileUpload
    {
        public string SaveFile()
        {
            string currentpath = System.IO.Directory.GetCurrentDirectory();
            string foldername = "Files";
            string path = Path.Combine(currentpath, foldername);
            DirectoryInfo rootPath = Directory.CreateDirectory(path);
        }
    }
}
