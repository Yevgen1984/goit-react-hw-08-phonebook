
export const AddUserForm = () => {
 
    return (
      <>
        <form>
          <label>
            <span>Name</span>
            <input type="text" name="name" />
          </label>

          <label>
            <span>Email</span>
            <input type="text" name="email" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }

