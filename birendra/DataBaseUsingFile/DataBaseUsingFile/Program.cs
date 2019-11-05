using System;
using System.IO;

namespace DataBaseUsingFile
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = @"C:\Users\birendra.bhujel\Desktop\file.txt";


        
            do
            {
                Console.Clear();
                Menu();
                Console.WriteLine("\n");
                Console.Write("\nSelect option (8 for exit): ");
                var selectedOptionString = Console.ReadLine();
                int.TryParse(selectedOptionString, out var selectedOption);

                Console.WriteLine("\n");

                if (selectedOption == 8)
                {
                    break;
                }

                switch (selectedOption)
                {
                    case 1:
                        ViewAllStudents(path);
                        break;
                    case 2:
                        FileStream fs = new FileStream(path, FileMode.Append, FileAccess.Write);
                        StreamWriter sw = new StreamWriter(fs);
                        String detail = AddNewStudent();
                        sw.WriteLine(detail);
                        sw.Close();
                        fs.Close();
                        break;
                    case 3:
                        UpdateStudentDetails(path);
                        break;
                    case 4:
                        DeleteStudentDetails(path);
                        break;
                    case 5:
                        SearchStudentByName(path);
                        break;
                    default:
                        Console.Clear();
                        Console.WriteLine("\n User input is invalid.");
                        break;
                }

                Console.WriteLine("\nConsole any key to show MENU");
                Console.ReadLine();

            } while (true);

            Console.ReadKey();
        }
        private static void Menu()
        {
            Console.WriteLine("Options:");
            Console.WriteLine("1. View all students");
            Console.WriteLine("2. Add new student");
            Console.WriteLine("3. Update student details");
            Console.WriteLine("4. Delete student details");
            Console.WriteLine("5. Search student by name");
        }

        private static void ViewAllStudents(string path)
        {
            string[] line = File.ReadAllLines(path);
            string[] s ;
           
            Console.WriteLine("ID\t\t\tFName\t\t\tLName\t\t\tCity\t\t\tState");
            for ( int i = 0; i < line.Length; i++)
            {
               
                s = line[i].Split(",");
            //    Console.WriteLine(s.Length);
                for ( int j = 0; j<s.Length-1; j++)
                {
                    Console.Write(s[j].Trim()+"\t\t\t");
                }
                Console.WriteLine(s[s.Length - 1].Trim());
            }
        }

        private static String AddNewStudent()
        {
            string str = "";

            Console.WriteLine("Enter student detail");
            Console.WriteLine("Enter ID");
            String id = Console.ReadLine();
            str += id +", ";

            Console.WriteLine("Enter FirstName");
            string fname = Console.ReadLine();
            str += fname + ", ";

            Console.WriteLine("Enter LastName");
            string lname = Console.ReadLine();
            str += lname + ", ";

            Console.WriteLine("Enter City");
            string city = Console.ReadLine();
            str += city + ", ";

            Console.WriteLine("Enter state");
            string state = Console.ReadLine();
            str += state;

            return str;
        }

        private static void UpdateStudentDetails(string path)
        {
            string[] line = File.ReadAllLines(path);
            string str = "";

            Console.WriteLine("Enter student detail");
            Console.WriteLine("Enter ID");
            String id = Console.ReadLine();
            str += id + ", ";

            Console.WriteLine("Enter FirstName");
            string fname = Console.ReadLine();
            str += fname + ", ";

            Console.WriteLine("Enter LastName");
            string lname = Console.ReadLine();
            str += lname + ", ";

            Console.WriteLine("Enter City");
            string city = Console.ReadLine();
            str += city + ", ";

            Console.WriteLine("Enter state");
            string state = Console.ReadLine();
            str += state;
            string s = "";
            for (int i = 0; i < line.Length; i++)
            {
                if (line[i].Contains(id))
                {
                    s += str;
                }
                else 
                {
                   s += line[i] + Environment.NewLine;
                }
            }
            File.WriteAllText(path, s);
            Console.WriteLine("student Details updated");
        }

        private static void DeleteStudentDetails(string path)
        {
            string[] line = File.ReadAllLines(path);
            Console.WriteLine("Enter id to delete");
            string id = Console.ReadLine();

            string str = "";

            for ( int i = 0; i < line.Length; i++)
            {
                if(!line[i].Contains(id))
                {
                    str += line[i] + Environment.NewLine;
                }
            }
            File.WriteAllText(path, str);
            Console.WriteLine("Student details with id {0} deleted",id);
        }

        private static void SearchStudentByName(string path)
        {
            string[] line = File.ReadAllLines(path);
            Console.WriteLine("Enter fname");
            string fname = Console.ReadLine();
            Console.WriteLine("Enter lname");
            string lname = Console.ReadLine();

            bool flg = false;

            string[] s;
            for (int i = 0; i < line.Length; i++)
            {
                if (line[i].Contains(fname) && line[i].Contains(lname))
                {
                    flg = true;
                     s = line[i].Split(",");
                    //    Console.WriteLine(s.Length);
                    for (int j = 0; j < s.Length - 1; j++)
                    {
                        Console.Write(s[j].Trim() + "\t\t\t");
                    }
                }
            }
            if ( flg)
            {
                Console.WriteLine("ID\t\t\tFName\t\t\tLName\t\t\tCity\t\t\tState");
                for (int j = 0; j < s.Length - 1; j++)
                {
                    Console.Write(s[j].Trim() + "\t\t\t");
                }
            }
            else
            {
                Console.WriteLine("Student with name {0} {1} is not found", fname, lname);

            }
        }
    }
}
