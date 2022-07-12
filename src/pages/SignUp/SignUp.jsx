import React from 'react';

const SignUp = () => {
    return (
        <form class="row g-3 w-25 mx-auto">
            <div class="col-md-6">
                <label for="inputFirstName" class="form-label"></label>
                <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"/>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label"></label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Last Name"/>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label"></label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Email"/>
            </div>
            <div class="col-12">
                <label for="inputPassword" class="form-label"></label>
                <input type="text" class="form-control" id="assword" placeholder="Password"/>
            </div>
            <div class="col-md-12">
                <label for="inputZip" class="form-label"></label>
                <input type="text" class="form-control" id="inputZip" placeholder="Zip Code"/>
            </div>
            <div class="col-6">
                <button type="submit" class="btn btn-danger">Sign Up</button>
            </div>
        </form>
    );
}

export default SignUp;
