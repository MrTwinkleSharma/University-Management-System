# University-Management-System

**Student can only view its details**  <br/>
API for Student <br/>
* Get own Details <br/>
GET: /api/student/:studentId <br/>

**Admins can create, update, get a student /s But can't delete** <br/>
APIs for Admin <br/>
* Create Student <br/>
POST: /api/admin <br/>

* Get All Students <br/>
GET: /api/admin <br/>
 
* Get Particular Student by ID <br/>
GET: /api/admin/:studentId <br/>
 
* Edit Details of Particular Student by ID <br/>
PUT: /api/admin/:studentId <br/>
 
**User is just for login purpose** <br/>
APIs for Any User <br/>
* Create Id <br/>
POST: /api/user <br/>
 
* Edit own details <br/>
PUT: /api/user/:userId <br/>
 
* Delete own Id <br/>
DELETE: /api/user/:userId <br/>
