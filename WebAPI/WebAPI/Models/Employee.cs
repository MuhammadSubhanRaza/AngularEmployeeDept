using System;
using System.Collections.Generic;

#nullable disable

namespace WebAPI.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string DepartmentName { get; set; }
        public DateTime? DatefJoining { get; set; }
        public string PhotoFileName { get; set; }
    }
}
