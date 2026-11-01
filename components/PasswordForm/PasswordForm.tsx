export default function PasswordForm() {
  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Enter Email Address:</td>
              <td><input type="email" name="email" value="" /></td>
            </tr> 
            
            <tr>
              <td>New Password:</td>
              <td><input type="password" name="password" value="" /></td> {/* FIXED: type="password" */}
            </tr>
            <tr>
              <td>Confirm Password:</td>
              <td><input type="password" name="confirm_password" value="" /></td> {/* FIXED: type="password" */}
            </tr>
            
            <tr>
              <td colSpan={2}>
                <input type="submit" value="My New Password" name="password_btn" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}