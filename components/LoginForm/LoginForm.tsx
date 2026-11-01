export default function LoginForm() {
  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Email Address:</td>
              <td><input type="email" name="email" value="" /></td>
            </tr> 
            
            <tr>
              <td>Password:</td>
              <td><input type="password" name="password" value="" /></td> {/* FIXED: type="password" */}
            </tr>
            
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Login" name="login_btn" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}