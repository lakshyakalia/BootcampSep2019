using Microsoft.Net.Http.Headers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Handlers
{
    public class FileUpload
    {
        //public string SaveFile(Dictionary<string,string> file )
        //{
        //    string currentpath = Directory.GetCurrentDirectory().ToString();
        //    string parent = Directory.GetParent(currentpath).ToString();
        //    string parentdirectory = Directory.GetParent(parent).ToString();
        //    string root = Directory.GetParent(parentdirectory).ToString();
        //    string dest = Path.Combine(root, "assets");
        //    try
        //    {
        //        var filename = ContentDispositionHeaderValue
        //                                  .Parse(file.ContentDisposition)
        //                                  .FileName
        //                                  .Trim('"');
        //        String date = DateTime.Now.Ticks.ToString();
        //        filename = dest + "\\" + date + filename;
        //    }
        //    catch(FileNotFoundException ex)
        //    {

        //    }
       // }
    }
}
