let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);
let UserTipo = prompt("Digite sua funcao:");
let Dieta;
if (UserTipo = "Employe") {
    Dieta = "access to Dietary Services";
} else if (UserTipo = "Enrolled Member") {
    Dieta = "access to Dietary Services and one-on-one interaction with a dietician";
} else if (UserTipo = "Subscriber") {
    Dieta = "partial access to facilitate Dietary Services only";
} else {
    UserTipo = Non-Subscriber;
    Dieta = "need to enroll or at least subscribe first to avail this facility";
}
console.log(Dieta)
