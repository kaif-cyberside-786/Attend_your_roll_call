// ===== CONFIGURATION =====
// For this demo, we'll use localStorage. 
// To use Firebase, uncomment the Firebase section and add your config

// Demo teacher credentials
const DEMO_TEACHERS = [
    { id: '1', username: 'admin', password: 'admin', name: 'Dr. Vaibhav Jain' }    
];

// Demo students database
const DEMO_STUDENTS = {
    'CSA': [
  { id: 'DE24078', rollNo: '24C4001', name: 'AASTHA AGRAWAL' },
  { id: 'DE24080', rollNo: '24C4002', name: 'ABHIMANYU CHATTERJEE' },
  { id: 'DE24084', rollNo: '24C4004', name: 'AJAY MAKWANE' },
  { id: 'DE24086', rollNo: '24C4005', name: 'AKSHITA VAISH' },
  { id: 'DE24087', rollNo: '24C4006', name: 'ALFAIZ KHAN' },
  { id: 'DE24088', rollNo: '24C4007', name: 'AMISH MAHAJAN' },
  { id: 'DE24091', rollNo: '24C4008', name: 'ANIL KUMAR KOL' },
  { id: 'DE24094', rollNo: '24C4010', name: 'ANSHU SONSARWAR' },
  { id: 'DE24096', rollNo: '24C4011', name: 'ARNAV MANGWANI' },
  { id: 'DE24097', rollNo: '24C4012', name: 'ARPIT KUMAR SHUKLA' },
  { id: 'DE24101', rollNo: '24C4013', name: 'ASHISH GUPTA' },
  { id: 'DE24103', rollNo: '24C4015', name: 'ATHARV VERMA' },
  { id: 'DE24105', rollNo: '24C4016', name: 'AYUSH BIJOLIYA' },
  { id: 'DE24107', rollNo: '24C4017', name: 'AYUSH TIWARI' },
  { id: 'DE24109', rollNo: '24C4018', name: 'BHOOMIK MAHAJAN' },
  { id: 'DE24111', rollNo: '24C4019', name: 'CHANDRASHEKHAR RATHORE' },
  { id: 'DE24112', rollNo: '24C4020', name: 'CHETAN JAT' },
  { id: 'DE24115', rollNo: '24C4021', name: 'CHITRANGDA DUBEY' },
  { id: 'DE24117', rollNo: '24C4022', name: 'DARSHAN PATWA' },
  { id: 'DE24118', rollNo: '24C4023', name: 'DEVANSH MALVIYA' },
  { id: 'DE24121', rollNo: '24C4024', name: 'DHRUV GUPTA' },
  { id: 'DE24123', rollNo: '24C4025', name: 'DIVYANSH JAIN' },
  { id: 'DE24125', rollNo: '24C4026', name: 'GARV SHARMA' },
  { id: 'DE24127', rollNo: '24C4027', name: 'HARDIK RAGHUVANSHI' },
  { id: 'DE24129', rollNo: '24C4028', name: 'HARSHIT THAKUR' },
  { id: 'DE24131', rollNo: '24C4029', name: 'ISHANT NAREDI' },
  { id: 'DE24134', rollNo: '24C4030', name: 'JITESH PRAJAPATI' },
  { id: 'DE24135', rollNo: '24C4031', name: 'KAIF JILANI QURESHI' },
  { id: 'DE24137', rollNo: '24C4032', name: 'KANCHAN KURMI' },
  { id: 'DE24139', rollNo: '24C4033', name: 'KAVYA SAHU' },
  { id: 'DE24140', rollNo: '24C4034', name: 'KRISH AGRAWAL' },
  { id: 'DE24142', rollNo: '24C4035', name: 'KULDEEP PARMAR' },
  { id: 'DE24144', rollNo: '24C4036', name: 'LOKESH GOUR' },
  { id: 'DE24146', rollNo: '24C4037', name: 'LUVAI AMJHERAWALA' },
  { id: 'DE24147', rollNo: '24C4038', name: 'MADHURI SHARMA' },
  { id: 'DE24150', rollNo: '24C4039', name: 'MAHENDRA PATIDAR' },
  { id: 'DE24152', rollNo: '24C4040', name: 'MAHIPAL SINGH RATHORE' },
  { id: 'DE24154', rollNo: '24C4041', name: 'MAYANK KIRADE' },
  { id: 'DE24156', rollNo: '24C4042', name: 'MOHIT SHARMA' },
  { id: 'DE24158', rollNo: '24C4043', name: 'MUBASHER MAQBOOL' },
  { id: 'DE24159', rollNo: '24C4044', name: 'MUKUND RATHORE' },
  { id: 'DE24161', rollNo: '24C4045', name: 'NAMAN PANDEY' },
  { id: 'DE24163', rollNo: '24C4046', name: 'NIDHI THAKUR' },
  { id: 'DE24164', rollNo: '24C4047', name: 'NIKHIL UIKEY' },
  { id: 'DE24167', rollNo: '24C4048', name: 'NITIN GUPTA' },
  { id: 'DE24168', rollNo: '24C4049', name: 'PARTH YADAV' },
  { id: 'DE24171', rollNo: '24C4050', name: 'POOJA AHIRWAR' },
  { id: 'DE24173', rollNo: '24C4051', name: 'PRANJAL CHAWDA' },
  { id: 'DE24176', rollNo: '24C4052', name: 'PRIYANSH NAMDEV' },
  { id: 'DE24177', rollNo: '24C4053', name: 'PRIYANSH VARYANI' },
  { id: 'DE24180', rollNo: '24C4054', name: 'PRIYANSHU ARYA' },
  { id: 'DE24182', rollNo: '24C4055', name: 'PUSHPIT UPADHYAY' },
  { id: 'DE24184', rollNo: '24C4056', name: 'RAKESH DUDWE' },
  { id: 'DE24186', rollNo: '24C4057', name: 'RASHMITA MANDLOI' },
  { id: 'DE24188', rollNo: '24C4058', name: 'RINKU KALESH' },
  { id: 'DE24190', rollNo: '24C4059', name: 'RITVIKA BAFNA' },
  { id: 'DE24192', rollNo: '24C4060', name: 'ROHIT BARDE' },
  { id: 'DE24194', rollNo: '24C4061', name: 'ROUNAK WASKEL' },
  { id: 'DE24196', rollNo: '24C4062', name: 'RUMEN THAKUR' },
  { id: 'DE24198', rollNo: '24C4063', name: 'SAKSHAM ADIL' },
  { id: 'DE24200', rollNo: '24C4064', name: 'SAMAYARA VERMA' },
  { id: 'DE24202', rollNo: '24C4065', name: 'SANIYA GUPTA' },
  { id: 'DE24203', rollNo: '24C4066', name: 'SARTHAK GEETE' },
  { id: 'DE24205', rollNo: '24C4067', name: 'SEJAL SONI' },
  { id: 'DE24207', rollNo: '24C4068', name: 'SHIVANI BADOLIA' },
  { id: 'DE24209', rollNo: '24C4069', name: 'SHREYASH BANZAL' },
  { id: 'DE24210', rollNo: '24C4070', name: 'SHUBH RAGHUVANSHI' },
  { id: 'DE24212', rollNo: '24C4071', name: 'SHUBHAM WASKEL' },
  { id: 'DE24214', rollNo: '24C4072', name: 'SIDDHANT BHAWSAR' },
  { id: 'DE24216', rollNo: '24C4073', name: 'SIDDHI JHAWAR' },
  { id: 'DE24218', rollNo: '24C4074', name: 'STUTI JAIN' },
  { id: 'DE24220', rollNo: '24C4075', name: 'TAHER MHOWWALA' },
  { id: 'DE24222', rollNo: '24C4076', name: 'URMILA DHARVE' },
  { id: 'DE24225', rollNo: '24C4077', name: 'UTKARSH CHALMELA' },
  { id: 'DE24227', rollNo: '24C4078', name: 'VAIDIK SHRIVASTAVA' },
  { id: 'DE24229', rollNo: '24C4079', name: 'VIJIT MANDLOI' },
  { id: 'DE24231', rollNo: '24C4080', name: 'VIKAS JAMRE' },
  { id: 'DE24233', rollNo: '24C4081', name: 'VISHAL RAJANI' },
  { id: 'DE24174', rollNo: '24C4082', name: 'PRANSHU' },
  { id: 'DE24704', rollNo: '24C4086', name: 'SHUBH UPADHYAYA' },
  { id: 'DE25720', rollNo: '25C4091', name: 'ANSHA BHASKAR' },
  { id: 'DE25722', rollNo: '25C4092', name: 'DURGA' },
  { id: 'DE25724', rollNo: '25C4093', name: 'KAJAL CHOUREY' },
  { id: 'DE25728', rollNo: '25C4094', name: 'SAHIL JAISWAL' },
  { id: 'DE25730', rollNo: '25C4095', name: 'SOMKUMARI VAYAM' },
  { id: 'DE25731', rollNo: '25C4096', name: 'VEDIKA PORWAL' }
]
};

// ===== STATE MANAGEMENT =====
let currentUser = null;
let currentAttendanceSession = null;

// ===== UTILITY FUNCTIONS =====

// Get data from localStorage
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Save data to localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Initialize attendance records if not exists
function initializeAttendanceRecords() {
    if (!getData('attendanceRecords')) {
        saveData('attendanceRecords', []);
    }
}

// Show a specific page and hide others
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Format date to YYYY-MM-DD
function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format date for display
function formatDateDisplay(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ===== AUTHENTICATION =====

// Login function
function login(username, password) {
    const teacher = DEMO_TEACHERS.find(t => 
        t.username === username && t.password === password
    );
    
    if (teacher) {
        currentUser = teacher;
        saveData('currentUser', teacher);
        return true;
    }
    return false;
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showPage('loginPage');
    document.getElementById('loginForm').reset();
}

// Check if user is logged in
function checkAuth() {
    const savedUser = getData('currentUser');
    if (savedUser) {
        currentUser = savedUser;
        document.getElementById('teacherName').textContent = currentUser.name;
        showPage('dashboardPage');
    } else {
        showPage('loginPage');
    }
}

// ===== ATTENDANCE FUNCTIONS =====

// Get students for a specific class
function getStudents(className) {
    return DEMO_STUDENTS[className] || [];
}

// Start attendance session
function startAttendance(className, subject, date) {
    const students = getStudents(className);
    
    if (students.length === 0) {
        alert('No students found for this class!');
        return;
    }
    
    currentAttendanceSession = {
        className,
        subject,
        date,
        students: students.map(s => ({
            ...s,
            status: 'present' // Default to present
        }))
    };
    
    renderAttendanceList();
    showPage('attendancePage');
}

// Render attendance list
function renderAttendanceList() {
    const { className, subject, date, students } = currentAttendanceSession;
    
    document.getElementById('attendanceTitle').textContent = 'Mark Attendance';
    document.getElementById('attendanceClass').textContent = `Class: ${className}`;
    document.getElementById('attendanceSubject').textContent = `Subject: ${subject}`;
    document.getElementById('attendanceDate').textContent = `Date: ${formatDateDisplay(date)}`;
    
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
    
    students.forEach((student, index) => {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        studentItem.innerHTML = `
            <div class="student-info">
                <div class="student-name">${student.name}</div>
                <div class="student-roll">Roll No: ${student.rollNo}</div>
            </div>
            <div class="attendance-toggle">
                <button class="toggle-btn ${student.status === 'present' ? 'present' : ''}" 
                        data-index="${index}" 
                        data-status="present">
                    ✓ Present
                </button>
                <button class="toggle-btn ${student.status === 'absent' ? 'absent' : ''}" 
                        data-index="${index}" 
                        data-status="absent">
                    ✗ Absent
                </button>
            </div>
        `;
        studentsList.appendChild(studentItem);
    });
    
    // Add click listeners to toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', handleToggleStatus);
    });
}

// Handle status toggle
function handleToggleStatus(e) {
    const index = parseInt(e.target.dataset.index);
    const status = e.target.dataset.status;
    
    currentAttendanceSession.students[index].status = status;
    renderAttendanceList();
}

// Mark all students as present
function markAllPresent() {
    currentAttendanceSession.students.forEach(student => {
        student.status = 'present';
    });
    renderAttendanceList();
}

// Mark all students as absent
function markAllAbsent() {
    currentAttendanceSession.students.forEach(student => {
        student.status = 'absent';
    });
    renderAttendanceList();
}

// Submit attendance
function submitAttendance() {
    if (!currentAttendanceSession) return;
    
    const { className, subject, date, students } = currentAttendanceSession;
    
    // Create attendance record
    const record = {
        id: 'ATT_' + Date.now(),
        teacherId: currentUser.id,
        teacherName: currentUser.name,
        className,
        subject,
        date,
        timestamp: new Date().toISOString(),
        students: students.map(s => ({
            studentId: s.id,
            name: s.name,
            rollNo: s.rollNo,
            status: s.status
        }))
    };
    
    // Save to localStorage
    const records = getData('attendanceRecords') || [];
    records.push(record);
    saveData('attendanceRecords', records);
    
    // Show success message
    alert(`Attendance submitted successfully!\n\nClass: ${className}\nSubject: ${subject}\nDate: ${formatDateDisplay(date)}\n\nTotal Students: ${students.length}\nPresent: ${students.filter(s => s.status === 'present').length}\nAbsent: ${students.filter(s => s.status === 'absent').length}`);
    
    currentAttendanceSession = null;
    showPage('dashboardPage');
}

// ===== VIEW RECORDS =====

// View attendance records
function viewRecords(className, date) {
    const allRecords = getData('attendanceRecords') || [];
    
    // Filter records by class and date
    const filteredRecords = allRecords.filter(r => 
        r.className === className && r.date === date
    );
    
    renderRecords(className, date, filteredRecords);
    showPage('recordsPage');
}

// View all students attendance
function viewAllStudentsAttendance(className, startDate = null, endDate = null) {
    const allRecords = getData('attendanceRecords') || [];
    const students = getStudents(className);
    
    if (students.length === 0) {
        alert('No students found for this class!');
        return;
    }
    
    // Filter records by class and optional date range
    let filteredRecords = allRecords.filter(r => r.className === className);
    
    if (startDate) {
        filteredRecords = filteredRecords.filter(r => r.date >= startDate);
    }
    if (endDate) {
        filteredRecords = filteredRecords.filter(r => r.date <= endDate);
    }
    
    // Sort records by date
    filteredRecords.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Get unique dates
    const dates = [...new Set(filteredRecords.map(r => r.date))].sort();
    
    // Build attendance data for each student
    const studentAttendanceData = students.map(student => {
        const attendance = {
            studentId: student.id,
            name: student.name,
            rollNo: student.rollNo,
            records: {},
            totalClasses: 0,
            presentCount: 0,
            absentCount: 0
        };
        
        // For each date, find the student's attendance
        dates.forEach(date => {
            const recordsForDate = filteredRecords.filter(r => r.date === date);
            let found = false;
            
            recordsForDate.forEach(record => {
                const studentRecord = record.students.find(s => s.studentId === student.id);
                if (studentRecord) {
                    attendance.records[date] = {
                        status: studentRecord.status,
                        subject: record.subject
                    };
                    attendance.totalClasses++;
                    if (studentRecord.status === 'present') {
                        attendance.presentCount++;
                    } else {
                        attendance.absentCount++;
                    }
                    found = true;
                }
            });
            
            if (!found && recordsForDate.length > 0) {
                // There was a class but student not in attendance
                attendance.records[date] = { status: 'no-record', subject: '-' };
            }
        });
        
        attendance.percentage = attendance.totalClasses > 0 
            ? ((attendance.presentCount / attendance.totalClasses) * 100).toFixed(1)
            : 0;
        
        return attendance;
    });
    
    renderAllStudentsAttendance(className, dates, studentAttendanceData, startDate, endDate);
    showPage('allStudentsPage');
}

// Render records
function renderRecords(className, date, records) {
    const header = document.getElementById('recordsHeader');
    const content = document.getElementById('recordsContent');
    
    header.innerHTML = `
        <h2>Attendance Records</h2>
        <div class="attendance-info">
            Class: ${className} | Date: ${formatDateDisplay(date)}
        </div>
    `;
    
    if (records.length === 0) {
        content.innerHTML = `
            <div class="no-records">
                <h3>No Records Found</h3>
                <p>No attendance has been marked for this class on ${formatDateDisplay(date)}</p>
            </div>
        `;
        return;
    }
    
    // Combine all students from all records
    let allStudents = [];
    records.forEach(record => {
        allStudents = allStudents.concat(record.students.map(s => ({
            ...s,
            subject: record.subject,
            teacherName: record.teacherName
        })));
    });
    
    // Calculate statistics
    const totalPresent = allStudents.filter(s => s.status === 'present').length;
    const totalAbsent = allStudents.filter(s => s.status === 'absent').length;
    
    content.innerHTML = `
        <div class="summary-stats">
            <div class="stat-card">
                <div class="stat-value">${records.length}</div>
                <div class="stat-label">Sessions</div>
            </div>
            <div class="stat-card stat-present">
                <div class="stat-value">${totalPresent}</div>
                <div class="stat-label">Total Present</div>
            </div>
            <div class="stat-card stat-absent">
                <div class="stat-value">${totalAbsent}</div>
                <div class="stat-label">Total Absent</div>
            </div>
        </div>
        
        <table class="records-table">
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Student Name</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Teacher</th>
                </tr>
            </thead>
            <tbody>
                ${allStudents.map(s => `
                    <tr>
                        <td>${s.rollNo}</td>
                        <td>${s.name}</td>
                        <td>${s.subject}</td>
                        <td>
                            <span class="status-badge status-${s.status}">
                                ${s.status === 'present' ? '✓ Present' : '✗ Absent'}
                            </span>
                        </td>
                        <td>${s.teacherName}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Render all students attendance overview (Excel-style format)
function renderAllStudentsAttendance(className, dates, studentData, startDate, endDate) {
    const header = document.getElementById('allStudentsHeader');
    const content = document.getElementById('allStudentsContent');
    
    // Create header
    let dateRangeText = 'All Time';
    if (startDate && endDate) {
        dateRangeText = `${formatDateDisplay(startDate)} to ${formatDateDisplay(endDate)}`;
    } else if (startDate) {
        dateRangeText = `From ${formatDateDisplay(startDate)}`;
    } else if (endDate) {
        dateRangeText = `Up to ${formatDateDisplay(endDate)}`;
    }
    
    header.innerHTML = `
        <h2>All Students Attendance Overview</h2>
        <div class="attendance-info">
            Class: ${className} | Period: ${dateRangeText}
        </div>
    `;
    
    if (dates.length === 0) {
        content.innerHTML = `
            <div class="no-records">
                <h3>No Attendance Records Found</h3>
                <p>No attendance has been marked for this class in the selected period.</p>
            </div>
        `;
        return;
    }
    
    // Calculate overall statistics
    const totalStudents = studentData.length;
    const avgAttendance = totalStudents > 0 ? 
        studentData.reduce((sum, s) => sum + parseFloat(s.percentage), 0) / totalStudents : 0;
    const highAttendance = studentData.filter(s => parseFloat(s.percentage) >= 75).length;
    
    // Build the table (matching the image format exactly)
    content.innerHTML = `
        <div class="summary-stats">
            <div class="stat-card">
                <div class="stat-value">${totalStudents}</div>
                <div class="stat-label">Total Students</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${dates.length}</div>
                <div class="stat-label">Total Days</div>
            </div>
            <div class="stat-card stat-present">
                <div class="stat-value">${avgAttendance.toFixed(1)}%</div>
                <div class="stat-label">Average Attendance</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${highAttendance}</div>
                <div class="stat-label">≥75% Attendance</div>
            </div>
        </div>
        
        <div class="filter-info">
            <strong>Note:</strong> 1 = Present, 0 = Absent, - = No Record
        </div>
        
        <div class="table-scroll">
            <table class="student-attendance-table">
                <thead>
                    <tr>
                        <th style="background: #ff9966;">Sr.No</th>
                        <th style="background: #ffcc99;">Roll No</th>
                        <th style="background: #ffcc99;">Enrol No</th>
                        <th style="background: #ffcc99;">Name</th>
                        ${dates.map(date => {
                            const [year, month, day] = date.split('-');
                            return `<th class="date-column" style="background: #ffcc99;">${day}/${month}</th>`;
                        }).join('')}
                        <th style="background: #ffcc99;">Total(${dates.length})</th>
                    </tr>
                </thead>
                <tbody>
                    ${studentData.map((student, index) => {
                        const percentageClass = 
                            student.percentage >= 75 ? 'percentage-high' :
                            student.percentage >= 50 ? 'percentage-medium' : 'percentage-low';
                        
                        return `
                            <tr>
                                <td style="text-align: center; font-weight: bold;">${index + 1}</td>
                                <td class="student-roll-cell">${student.rollNo}</td>
                                <td class="student-roll-cell">${student.studentId}</td>
                                <td class="student-name-cell">${student.name}</td>
                                ${dates.map(date => {
                                    const record = student.records[date];
                                    if (!record || record.status === 'no-record') {
                                        return `<td class="date-column" style="color: #999;">-</td>`;
                                    }
                                    const mark = record.status === 'present' ? '1' : '0';
                                    const color = record.status === 'present' ? '#28a745' : '#dc3545';
                                    return `<td class="date-column" style="color: ${color}; font-weight: bold;" title="${record.subject}">${mark}</td>`;
                                }).join('')}
                                <td style="text-align: center; font-weight: bold; font-size: 1.1rem;" class="${percentageClass}">${student.presentCount}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ===== EXPORT TO CSV =====

function exportToCSV() {
    const className = document.getElementById('viewClassSelect').value;
    const date = document.getElementById('viewDateSelect').value;
    
    if (!className || !date) {
        alert('Please select class and date first!');
        return;
    }
    
    const allRecords = getData('attendanceRecords') || [];
    const filteredRecords = allRecords.filter(r => 
        r.className === className && r.date === date
    );
    
    if (filteredRecords.length === 0) {
        alert('No records to export!');
        return;
    }
    
    // Prepare CSV data
    let csv = 'Roll No,Student Name,Subject,Status,Teacher,Date\n';
    
    filteredRecords.forEach(record => {
        record.students.forEach(student => {
            csv += `${student.rollNo},${student.name},${record.subject},${student.status},${record.teacherName},${formatDateDisplay(date)}\n`;
        });
    });
    
    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance_${className}_${date}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Export all students attendance to CSV
function exportAllStudentsCSV() {
    const className = document.getElementById('allStudentsClassSelect').value;
    const startDate = document.getElementById('dateRangeStart').value;
    const endDate = document.getElementById('dateRangeEnd').value;
    
    if (!className) {
        alert('Please select a class first!');
        return;
    }
    
    const allRecords = getData('attendanceRecords') || [];
    const students = getStudents(className);
    
    // Filter records
    let filteredRecords = allRecords.filter(r => r.className === className);
    if (startDate) {
        filteredRecords = filteredRecords.filter(r => r.date >= startDate);
    }
    if (endDate) {
        filteredRecords = filteredRecords.filter(r => r.date <= endDate);
    }
    
    if (filteredRecords.length === 0) {
        alert('No records to export!');
        return;
    }
    
    // Sort and get unique dates
    const dates = [...new Set(filteredRecords.map(r => r.date))].sort();
    
    // Prepare CSV header
    let csv = 'Sr.No,Roll No,Enrol No,Name,' + dates.map(d => {
        const [year, month, day] = d.split('-');
        return `${day}/${month}`;
    }).join(',') + `,Total(${dates.length})\n`;
    
    // Add student data
    students.forEach((student, index) => {
        let row = `${index + 1},${student.rollNo},${student.id},${student.name},`;
        let totalPresent = 0;
        
        dates.forEach(date => {
            const recordsForDate = filteredRecords.filter(r => r.date === date);
            let found = false;
            let status = '-';
            
            recordsForDate.forEach(record => {
                const studentRecord = record.students.find(s => s.studentId === student.id);
                if (studentRecord) {
                    status = studentRecord.status === 'present' ? '1' : '0';
                    if (studentRecord.status === 'present') totalPresent++;
                    found = true;
                }
            });
            
            row += status + ',';
        });
        
        row += totalPresent;
        csv += row + '\n';
    });
    
    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `all_students_attendance_${className}_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// ===== EVENT LISTENERS =====

document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    initializeAttendanceRecords();
    checkAuth();
    
    // Set today's date as default
    const today = formatDate(new Date());
    document.getElementById('dateSelect').value = today;
    document.getElementById('viewDateSelect').value = today;
    
    // Login form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (login(username, password)) {
            document.getElementById('teacherName').textContent = currentUser.name;
            document.getElementById('loginError').textContent = '';
            showPage('dashboardPage');
        } else {
            document.getElementById('loginError').textContent = 'Invalid username or password';
        }
    });
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Start attendance form
    document.getElementById('attendanceForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const className = document.getElementById('classSelect').value;
        const subject = document.getElementById('subjectSelect').value;
        const date = document.getElementById('dateSelect').value;
        
        startAttendance(className, subject, date);
    });
    
    // View records form
    document.getElementById('viewRecordsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const className = document.getElementById('viewClassSelect').value;
        const date = document.getElementById('viewDateSelect').value;
        
        viewRecords(className, date);
    });
    
    // View all students form
    document.getElementById('viewAllStudentsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const className = document.getElementById('allStudentsClassSelect').value;
        const startDate = document.getElementById('dateRangeStart').value;
        const endDate = document.getElementById('dateRangeEnd').value;
        
        viewAllStudentsAttendance(className, startDate, endDate);
    });
    
    // Quick action buttons
    document.getElementById('markAllPresent').addEventListener('click', markAllPresent);
    document.getElementById('markAllAbsent').addEventListener('click', markAllAbsent);
    
    // Submit attendance
    document.getElementById('submitAttendance').addEventListener('click', submitAttendance);
    
    // Back buttons
    document.getElementById('backToDashboard').addEventListener('click', () => {
        if (confirm('Are you sure? Unsaved changes will be lost.')) {
            showPage('dashboardPage');
        }
    });
    
    document.getElementById('backToDashboard2').addEventListener('click', () => {
        showPage('dashboardPage');
    });
    
    document.getElementById('backToDashboard3').addEventListener('click', () => {
        showPage('dashboardPage');
    });
    
    // Export CSV
    document.getElementById('exportCSV').addEventListener('click', exportToCSV);
    document.getElementById('exportAllStudentsCSV').addEventListener('click', exportAllStudentsCSV);
});

// ===== FIREBASE INTEGRATION (OPTIONAL) =====
/*
To use Firebase instead of localStorage:

1. Create a Firebase project at https://firebase.google.com
2. Enable Firestore Database
3. Get your Firebase config
4. Uncomment the code below and replace with your config
5. Include Firebase SDK in index.html:
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js"></script>

// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Save attendance to Firestore
async function submitAttendanceFirebase() {
    const { className, subject, date, students } = currentAttendanceSession;
    
    const record = {
        teacherId: currentUser.id,
        teacherName: currentUser.name,
        className,
        subject,
        date,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        students: students.map(s => ({
            studentId: s.id,
            name: s.name,
            rollNo: s.rollNo,
            status: s.status
        }))
    };
    
    await db.collection('attendance').add(record);
    alert('Attendance submitted successfully!');
    showPage('dashboardPage');
}

// Get records from Firestore
async function viewRecordsFirebase(className, date) {
    const snapshot = await db.collection('attendance')
        .where('className', '==', className)
        .where('date', '==', date)
        .get();
    
    const records = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    
    renderRecords(className, date, records);
    showPage('recordsPage');
}
*/
