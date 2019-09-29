using System;
using System.IO;
namespace Task
{

    class Program
    {
        private static string location;
        private static object obj1;

        static void Main(string[] args)
        {

            string location = @"C:\Users\lakshya.kalia\Desktop\File.txt";
            int flag = 1;
            while (flag>0)
            {
                Console.WriteLine("Options:");
                Console.WriteLine("1. View all students");
                Console.WriteLine("2. Add new student");
                Console.WriteLine("3. Update student details");
                Console.WriteLine("4. Delete student details");
                Console.WriteLine("5. Search student by name");
                Console.WriteLine("Select option:");
                int input = Convert.ToInt32(Console.ReadLine());
                switch (input)
                {
                    case 1:
                        view(location);
                        break;
                    case 2:
                        FileStream f = new FileStream(location, FileMode.Append, FileAccess.Write);
                        StreamWriter obj1 = new StreamWriter(f);
                        String add1 = add();
                        obj1.WriteLine(add1);
                        obj1.Close();
                        f.Close();
                        break;
                    case 3:
                        update(location);
                        break;
                    case 4:
                        delete(location);
                        break;
                    case 5: 
                        search(location);
                        break;
                    default:
                        Console.WriteLine("Enter a valid Number");
                        Console.Clear();
                        break;
                }
                Console.ReadKey();
                Console.WriteLine("Enter 1 to continue or 0 to exit");
                flag = Convert.ToInt32(Console.ReadLine());
            }
        }
        private static void view(string location)
        {
            string[] str = File.ReadAllLines(location);
            for (int i = 0; i < str.Length; i++)
            {
                Console.WriteLine(str[i]);

            }
        }
        private static string add()
        {
            string data = "";
            Console.WriteLine("Enter Id:");
            String id = Console.ReadLine();
            data = data + id + ",";
            Console.WriteLine("Enter Firstname:");
            String fname = Console.ReadLine();
            data = data + fname + ",";
            Console.WriteLine("Enter Lastname:");
            String lname = Console.ReadLine();
            data = data + lname + ",";
            Console.WriteLine("Enter City:");
            String city = Console.ReadLine();
            data = data + city + ",";
            Console.WriteLine("Enter State:");
            String state = Console.ReadLine();
            data = data + state + "\n";
            return data;

        }

        private static void delete(string location)
        {
            string[] del = File.ReadAllLines(location);
            string str = "";
            Console.WriteLine("Enter id of student you want to delete");
            String s = Console.ReadLine();
            for (int i = 0; i < del.Length; i++)
            {
                if (!del[i].Contains(s))
                {
                    str = str + del[i] + Environment.NewLine;
                }
            }
            File.WriteAllText(location, str);
            Console.WriteLine("Deleted");
        }

        private static void search(string location)
        {
            string[] search = File.ReadAllLines(location);
            Console.WriteLine("Enter the name of student");
            String find = Console.ReadLine();
            Boolean flag = false;
            for (int i = 0; i < search.Length; i++)
            {
                if (search[i].Contains(find) == true)
                {
                    flag = true;
                    break;
                }
                else
                {
                    flag = false;
                }
            }
            if (flag == true)
            {
                Console.Write("Record Found");
            }
            else
            {
                Console.Write(" No Record Found");
            }

        }

        private static void update(string location)
        {
            string[] search = File.ReadAllLines(location);
            string str = "";
            Console.WriteLine("Enter the id of the student");
            string find = Console.ReadLine();
            for (int i = 0; i < search.Length; i++)
            {
                if (search[i].Contains(find))
                {
                    Console.WriteLine("Enter string you want to update");
                    string old = Console.ReadLine();
                    Console.WriteLine("Enter new string");
                    string new1 = Console.ReadLine();
                    str = str + search[i].Replace(old, new1) + Environment.NewLine;
                    Console.WriteLine("Data updated!");
                }
                else
                {
                    str = str + search[i] + Environment.NewLine;
                }
            }
            File.WriteAllText(location, str);
        }
    }
}
