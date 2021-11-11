import { SyncOutlined } from '@ant-design/icons';

const Authform = ({
    handleSubmit,
    fName, setFname,
    lName, setLname,
    email, setEmail,
    password, setPassword,
    secret, setSecret,
    loading,
    page
}) => {
    return (
        <form onSubmit={handleSubmit} className="container">
            {page !== 'login' && (<div div className="row">
                <div class="col md-2">
                    <label for="exampleInputFirstName" class="form-label">First Name</label>
                    <input
                        value={fName}
                        onChange={e => setFname(e.target.value)}
                        type="name" class="form-control" id="exampleInputFirstName" aria-describedby="nameHelp" />
                </div>
                <div class="col mb-2">
                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                    <input
                        value={lName}
                        onChange={e => setLname(e.target.value)}
                        type="name" class="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp" />
                    <div id="name" class="form-text"></div>
                </div>
            </div>)}
            <div className="col mb-3">
                <div class="col">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="col mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password" class="form-control" id="exampleInputPassword1" />
                </div>
            </div>
            {page !== 'login' && (<><div class="mb-3 form-group">
                <small>
                    <label className="text-muted">Pick a question</label>
                </small>
                <select className="form-control">
                    <option>What is your pet name?</option>
                    <option>What is your best friend name?</option>
                    <option>What city you were born?</option>
                </select>
            </div><div className="mb-3 form-group">
                    <input
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                        type="text" className="form-control" placeholder="Write your answer here" />
                </div></>
            )}
            <button disabled={page === "login" ? !email || !password :
                !fName || !lName || !email || !password || !secret} type="submit" class="btn btn-primary col-12">{loading ? <SyncOutlined spin className="py-1" /> : 'Submit'}</button>
        </form >
    );
}

export default Authform;
