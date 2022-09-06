import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'; 

export const Register = () => {

    return<>
              <form onSubmit>
                        <div class="row">
                            <div class="col-50">
                                <label ><i class="fa fa-user"></i> Name</label>
                                <input type="text" id="fname" name="firstname" placeholder='enter user name' />
                                <label ><i class="fa fa-envelope"></i> Password</label>
                                <input type="password" id="firstname" name="firstname" placeholder='enter user password' />
                                <input type="submit" value="sign in" className="btn" />
                            </div>
                        </div>
                    </form>
    </>
}