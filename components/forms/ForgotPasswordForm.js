import { SyncOutlined } from '@ant-design/icons';

const ForgotPasswordForm = ({
    handleSubmit,
    email, setEmail,
    newPassword, setNewPassword,
    secret, setSecret,
    loading,
    page
}) => {
    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="col mb-3">
                <div className="col">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div class="col mb-3">
                    <label for="exampleInputPassword1" className="form-label">New Password</label>
                    <input
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        type="password" class="form-control" id="exampleInputPassword1" />
                </div>
            </div>
            {page !== 'login' && (<><div className="mb-3 form-group">
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
            <button disabled={!email || !newPassword || !secret || loading} type="submit" class="btn btn-primary col-12">{loading ? <SyncOutlined spin className="py-1" /> : 'Submit'}</button>
        </form >
    );
}

export default ForgotPasswordForm;
