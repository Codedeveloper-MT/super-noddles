export default function RegistrationForm() {
  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Enter Name:</td>
              <td><input type="text" name="name" value="" /></td>
            </tr> 
            <tr>
              <td>Surname:</td>
              <td><input type="text" name="surname" value="" /></td>
            </tr> 
            <tr>
              <td>Enter Username:</td>
              <td><input type="text" name="username" value="" /></td>
            </tr> 
            <tr>
              <td>Enter Email Address:</td>
              <td><input type="email" name="email" value="" /></td>
            </tr> 
            
            <tr>
              <td>New Password:</td>
              <td><input type="password" name="password" value="" /></td> {/* FIXED: type="password" */}
            </tr>  
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Register Your Account" name="register_btn" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}